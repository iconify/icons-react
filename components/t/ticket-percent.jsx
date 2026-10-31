import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/t7gevqblj.css';
import '../../css/x/xg1j88b8m.css';
import '../../css/r/rw86e5bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGszODHdmT" x1="1" x2="23" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGszODHdmT)" class="t7gevqblj wm-k"/><path class="wm-shine xg1j88b8m"/><path class="rw86e5bap wm-shine"/></g>`,
		"fallback": "withicons-lunar:ticket-percent",
	});
}

export default Component;
