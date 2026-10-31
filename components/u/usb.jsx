import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/vyyixacck.css';
import '../../css/p/p1ok4lb9h.css';
import '../../css/b/b74yyl5hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1p0Mzd6u" x1="0" x2="0" y1="1.01" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGHttscFPQ" x1="2.75" x2="21.5" y1="1.01" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG1p0Mzd6u)" stroke="url(#SVGHttscFPQ)" class="vyyixacck wm-k"/><path class="p1ok4lb9h wm-shine"/><path class="b74yyl5hk wm-shine"/></g>`,
		"fallback": "withicons-lunar:usb",
	});
}

export default Component;
