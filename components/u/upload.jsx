import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/z/z5ng0ab5t.css';
import '../../css/l/lw8p-dbln.css';
import '../../css/l/lp3fq-bmb.css';
import '../../css/n/nc31mcvwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4XcUSdoY" x1="0" x2="0" y1="3.01" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGbrnMKczR" x1="2.5" x2="21.5" y1="3.01" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG4XcUSdoY)" stroke="url(#SVGbrnMKczR)" class="wm-k z5ng0ab5t"/><path fill="url(#SVGbrnMKczR)" class="lw8p-dbln wm-a"/><path class="lp3fq-bmb wm-shine"/><path class="nc31mcvwm wm-shine"/></g>`,
		"fallback": "withicons-lunar:upload",
	});
}

export default Component;
