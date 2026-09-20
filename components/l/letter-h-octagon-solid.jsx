import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nctb94bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nctb94bca"/>`,
		"fallback": "mynaui:letter-h-octagon-solid",
	});
}

export default Component;
