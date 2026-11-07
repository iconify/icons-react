import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qpgyrzr1h.css';
import '../../css/y/ylwl4hnxm.css';
import '../../css/n/nitmyj45x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qpgyrzr1h"/><path class="ylwl4hnxm"/><path class="nitmyj45x"/></g>`,
		"fallback": "solar:music-note-4-linear",
	});
}

export default Component;
