import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/r5oibg8wi.css';
import '../../css/g/g-i26kc4h.css';
import '../../css/p/p35ja7u2n.css';
import '../../css/j/j3vf_tb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGaNG6bLt" x1="0" x2="0" y1="2.77" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGCJa5Ge9r" x1="1" x2="22.49" y1="2.77" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGGaNG6bLt)" stroke="url(#SVGCJa5Ge9r)" class="r5oibg8wi wm-k"/><path stroke="url(#SVGCJa5Ge9r)" class="g-i26kc4h wm-s"/><path class="p35ja7u2n wm-shine"/><path class="j3vf_tb_u wm-shine"/></g>`,
		"fallback": "withicons-lunar:user-check",
	});
}

export default Component;
