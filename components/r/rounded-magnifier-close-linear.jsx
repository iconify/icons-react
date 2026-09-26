import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qh-3y5b_g.css';
import '../../css/j/jjar52fez.css';
import '../../css/e/eshwbfyae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="qh-3y5b_g"/><path class="jjar52fez"/><path class="eshwbfyae"/></g>`,
		"fallback": "solar:rounded-magnifier-close-linear",
	});
}

export default Component;
