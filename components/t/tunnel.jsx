import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nqee42z0q.css';
import '../../css/e/e_b8esyyo.css';
import '../../css/n/nt4x22b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nqee42z0q"/><path class="e_b8esyyo"/><path class="nt4x22b_x"/></g>`,
		"fallback": "iconoir:tunnel",
	});
}

export default Component;
