import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jyx32vbov.css';
import '../../css/f/f59sa6bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jyx32vbov"/><path class="f59sa6bka"/></g>`,
		"fallback": "solar:laptop-2-linear",
	});
}

export default Component;
