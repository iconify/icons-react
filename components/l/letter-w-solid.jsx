import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3y2574i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc3y2574i"/>`,
		"fallback": "mynaui:letter-w-solid",
	});
}

export default Component;
