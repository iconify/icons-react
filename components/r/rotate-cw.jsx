import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q9dnpbcuc.css';
import '../../css/m/m8z6_mbjt.css';
import '../../css/v/vb4ujpb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJFzKDbJd" x1="0" x2="0" y1="1.51" y2="21.86" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGJPpUicGT" x1="2.53" x2="21.49" y1="1.51" y2="21.86" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGJFzKDbJd)" stroke="url(#SVGJPpUicGT)" class="q9dnpbcuc wm-k"/><path class="m8z6_mbjt wm-shine"/><path class="vb4ujpb1z wm-shine"/></g>`,
		"fallback": "withicons-lunar:rotate-cw",
	});
}

export default Component;
