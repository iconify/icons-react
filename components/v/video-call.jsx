import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/g/g-x9b-wbm.css';
import '../../css/e/e_wc2fb0w.css';
import '../../css/d/dv_xggbhi.css';
import '../../css/j/j1locexda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH1scNdNU" x1="0" x2="0" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGFkHJjcNn" x1="1" x2="23" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGH1scNdNU)" stroke="url(#SVGFkHJjcNn)" class="g-x9b-wbm wm-k"/><path fill="url(#SVGFkHJjcNn)" class="e_wc2fb0w wm-a"/><path class="dv_xggbhi wm-shine"/><path class="j1locexda wm-shine"/></g>`,
		"fallback": "withicons-lunar:video-call",
	});
}

export default Component;
