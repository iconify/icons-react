import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/m/mz-os-bmg.css';
import '../../css/i/ixayrypbe.css';
import '../../css/x/x_xp0fb8j.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dmojpbbzm.css';
import '../../css/d/d1qgnn8hc.css';
import '../../css/w/w_0jp_bmb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="mz-os-bmg"/><circle class="ixayrypbe"/><path class="x_xp0fb8j"/></g><g class="ij2x_72vy"><path class="dmojpbbzm"/><circle class="d1qgnn8hc"/><path class="w_0jp_bmb"/></g>`,
		"fallback": "openmoji:toggle-button-state-b",
	});
}

export default Component;
