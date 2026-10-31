import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/llow5sl_t.css';
import '../../css/k/k-mi20hua.css';
import '../../css/r/rdwbr8bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDU4rd2OG" x1="1.51" x2="22" y1="6" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGDU4rd2OG)" class="llow5sl_t wm-k"/><path class="k-mi20hua wm-shine"/><path class="rdwbr8bvf wm-shine"/></g>`,
		"fallback": "withicons-lunar:trending-up",
	});
}

export default Component;
