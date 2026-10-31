import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/v-hsijbdh.css';
import '../../css/q/qkao2x1jp.css';
import '../../css/m/mxwofoh5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGuBbaAdQv" x1="4.93" x2="19.07" y1="1.53" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGuBbaAdQv)" class="v-hsijbdh wm-k"/><path class="qkao2x1jp wm-shine"/><path class="mxwofoh5r wm-shine"/></g>`,
		"fallback": "withicons-lunar:rabbit",
	});
}

export default Component;
