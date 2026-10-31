import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/p-lp29bfg.css';
import '../../css/g/gxf7hf_uv.css';
import '../../css/d/dwx1ujb1d.css';
import '../../css/f/f7_j2_zny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfEEYCcXn" x1="0" x2="0" y1="2.5" y2="21.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGEDqjEeKg" x1="2" x2="21.99" y1="2.5" y2="21.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGfEEYCcXn)" stroke="url(#SVGEDqjEeKg)" class="p-lp29bfg wm-k"/><path fill="url(#SVGEDqjEeKg)" class="gxf7hf_uv wm-a"/><path class="dwx1ujb1d wm-shine"/><path class="f7_j2_zny wm-shine"/></g>`,
		"fallback": "withicons-lunar:layout-list",
	});
}

export default Component;
