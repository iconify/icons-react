import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/np4lslbbr.css';
import '../../css/c/c6t16ib3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="np4lslbbr"/><path class="c6t16ib3s"/></g>`,
		"fallback": "solar:plane-linear",
	});
}

export default Component;
