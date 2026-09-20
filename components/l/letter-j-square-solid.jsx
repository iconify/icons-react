import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pho01gbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pho01gbeu"/>`,
		"fallback": "mynaui:letter-j-square-solid",
	});
}

export default Component;
