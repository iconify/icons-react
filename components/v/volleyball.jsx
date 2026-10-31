import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/lmi1pv7-b.css';
import '../../css/f/fv1_al4ne.css';
import '../../css/u/uexm4mtdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGERnVSdTO" x1="1.5" x2="22.46" y1="1.5" y2="22.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGERnVSdTO)" class="lmi1pv7-b wm-k"/><path class="fv1_al4ne wm-shine"/><path class="uexm4mtdf wm-shine"/></g>`,
		"fallback": "withicons-lunar:volleyball",
	});
}

export default Component;
