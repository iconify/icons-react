import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/h32tnib5b.css';
import '../../css/a/a1dw8k46j.css';
import '../../css/d/ds6unjr8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLRhgodic" x1="0" x2="0" y1="2.52" y2="21.63" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG2NyAIC3P" x1="2.37" x2="21.48" y1="2.52" y2="21.63" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGLRhgodic)" stroke="url(#SVG2NyAIC3P)" class="h32tnib5b wm-k"/><path class="a1dw8k46j wm-shine"/><path class="ds6unjr8b wm-shine"/></g>`,
		"fallback": "withicons-lunar:pencil",
	});
}

export default Component;
