import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/v4qi_gwll.css';
import '../../css/l/luo4rfm_r.css';
import '../../css/w/wzwxk8i-q.css';
import '../../css/l/l6ylvn55k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeiVzvbRt" x1="0" x2="0" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG3MuHUc8v" x1="4.01" x2="20.49" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGeiVzvbRt)" stroke="url(#SVG3MuHUc8v)" class="v4qi_gwll wm-k"/><path fill="url(#SVG3MuHUc8v)" class="luo4rfm_r wm-a"/><path class="wm-shine wzwxk8i-q"/><path class="l6ylvn55k wm-shine"/></g>`,
		"fallback": "withicons-lunar:thermometer",
	});
}

export default Component;
