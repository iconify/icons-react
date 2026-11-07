import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hdz8l5g_x.css';
import '../../css/u/u836v1b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hdz8l5g_x"/><path class="u836v1b4v"/></g>`,
		"fallback": "solar:rewind-back-circle-linear",
	});
}

export default Component;
