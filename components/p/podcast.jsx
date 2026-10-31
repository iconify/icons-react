import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/c/cmq3wh1ky.css';
import '../../css/p/p-jsf45tq.css';
import '../../css/k/ki63zby8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN8UAvy6k" x1="0" x2="0" y1=".94" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGNKd8xecV" x1="1.5" x2="22.5" y1=".94" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGN8UAvy6k)" stroke="url(#SVGNKd8xecV)" class="cmq3wh1ky wm-k"/><path fill="url(#SVGNKd8xecV)" class="p-jsf45tq wm-a"/><path class="ki63zby8k wm-shine"/></g>`,
		"fallback": "withicons-lunar:podcast",
	});
}

export default Component;
