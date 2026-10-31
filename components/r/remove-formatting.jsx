import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/ds2h8obhm.css';
import '../../css/r/ryeggot7h.css';
import '../../css/r/rx2n50bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOHkJzcoy" x1="0" x2="0" y1="3" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG4bxKDeIR" x1="2.5" x2="21.49" y1="3" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGOHkJzcoy)" stroke="url(#SVG4bxKDeIR)" class="ds2h8obhm wm-k"/><path stroke="url(#SVG4bxKDeIR)" class="ryeggot7h wm-s"/><path class="rx2n50bzb wm-shine"/></g>`,
		"fallback": "withicons-lunar:remove-formatting",
	});
}

export default Component;
