import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hc73gr4ws.css';
import '../../css/m/mdcr0qbvu.css';
import '../../css/v/vd-hmwbqu.css';
import '../../css/e/e25t0_sfa.css';
import '../../css/c/cpui1zb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hc73gr4ws wm-shadow"/><path class="mdcr0qbvu"/><path class="vd-hmwbqu"/><path class="e25t0_sfa"/><path class="cpui1zb0i wm-s"/></g>`,
		"fallback": "withicons-retro:pichkari",
	});
}

export default Component;
