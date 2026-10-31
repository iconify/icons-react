import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/vl52anbnq.css';
import '../../css/a/aphli1pvj.css';
import '../../css/d/d_qn7tbpa.css';
import '../../css/i/ite_lq3fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9RV51dNJ" x1="0" x2="0" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGQL9Nae9n" x1="1.5" x2="22.48" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG9RV51dNJ)" stroke="url(#SVGQL9Nae9n)" class="vl52anbnq wm-k"/><path fill="url(#SVGQL9Nae9n)" class="aphli1pvj wm-a"/><path class="d_qn7tbpa wm-shine"/><path class="ite_lq3fl wm-shine"/></g>`,
		"fallback": "withicons-lunar:replace",
	});
}

export default Component;
