import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/o/oxxmqqlop.css';
import '../../css/c/cyq6iyt7a.css';
import '../../css/e/e9s7_8rsd.css';
import '../../css/k/kst8hcdfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2MZVldeg" x1="0" x2="0" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG1Z6fYssb" x1="2" x2="22.49" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG2MZVldeg)" stroke="url(#SVG1Z6fYssb)" class="oxxmqqlop wm-k"/><path stroke="url(#SVG1Z6fYssb)" class="cyq6iyt7a wm-s"/><path class="e9s7_8rsd wm-shine"/><path class="kst8hcdfg wm-shine"/></g>`,
		"fallback": "withicons-lunar:love-scroll",
	});
}

export default Component;
