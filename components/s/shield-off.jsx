import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/qgd4mvk3f.css';
import '../../css/l/l2sj8fbjg.css';
import '../../css/l/l-rup9zob.css';
import '../../css/j/j69lq9s_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGk68WJbGj" x1="2.01" x2="22" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGk68WJbGj)" class="qgd4mvk3f wm-k"/><path stroke="url(#SVGk68WJbGj)" class="l2sj8fbjg wm-s"/><path class="l-rup9zob wm-shine"/><path class="j69lq9s_f wm-shine"/></g>`,
		"fallback": "withicons-lunar:shield-off",
	});
}

export default Component;
