import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/nzve_nb9u.css';
import '../../css/x/x24zzt0hq.css';
import '../../css/v/v2vlaoblx.css';
import '../../css/q/quzxdbcfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGilTZXdAU" x1="2" x2="22" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGilTZXdAU)" class="nzve_nb9u wm-k"/><path fill="url(#SVGilTZXdAU)" class="wm-a x24zzt0hq"/><path class="v2vlaoblx wm-shine"/><path class="quzxdbcfz wm-shine"/></g>`,
		"fallback": "withicons-lunar:pencil-ruler",
	});
}

export default Component;
