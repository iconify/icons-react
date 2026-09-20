import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ms_1w9b7x.css';
import '../../css/v/vdyga0bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ms_1w9b7x"/><path class="vdyga0bgr"/></g>`,
		"fallback": "solar:parentheses-bold",
	});
}

export default Component;
