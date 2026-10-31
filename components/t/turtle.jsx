import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q-iziua4s.css';
import '../../css/s/s0hpf-jfu.css';
import '../../css/d/d3gszcbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSJkqtCBB" x1=".5" x2="22.73" y1="4" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGSJkqtCBB)" class="q-iziua4s wm-k"/><path class="s0hpf-jfu wm-shine"/><path class="d3gszcbiq wm-shine"/></g>`,
		"fallback": "withicons-lunar:turtle",
	});
}

export default Component;
