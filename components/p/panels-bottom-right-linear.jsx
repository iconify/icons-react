import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i22s-4u1h.css';
import '../../css/t/t1j-_8esg.css';
import '../../css/d/dplnzz0rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i22s-4u1h"/><path class="t1j-_8esg"/><path class="dplnzz0rj"/></g>`,
		"fallback": "solar:panels-bottom-right-linear",
	});
}

export default Component;
