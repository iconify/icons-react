import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/rp9z8hm_d.css';
import '../../css/g/gsca4rbpn.css';
import '../../css/l/l749nrvke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGk5lq1b0K" x1="0" x2="0" y1="1.33" y2="22.67" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGyqaitcTP" x1="1.33" x2="22.67" y1="1.33" y2="22.67" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGk5lq1b0K)" stroke="url(#SVGyqaitcTP)" class="rp9z8hm_d wm-k"/><path class="gsca4rbpn wm-shine"/><path class="l749nrvke wm-shine"/></g>`,
		"fallback": "withicons-lunar:marigold",
	});
}

export default Component;
