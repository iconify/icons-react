import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/esl52bb5e.css';
import '../../css/i/i5k3d_x8n.css';
import '../../css/u/ub6-4ksez.css';
import '../../css/w/we7wezkjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbKbg3c5x" x1="9" x2="15" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbKbg3c5x)" class="esl52bb5e"/><path class="i5k3d_x8n wm-shine"/><path class="ub6-4ksez wm-shine"/><path class="we7wezkjf wm-shine"/></g>`,
		"fallback": "withicons-utsav:virus",
	});
}

export default Component;
