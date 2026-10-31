import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/pbr8ctpxb.css';
import '../../css/y/yse71bbsi.css';
import '../../css/v/vobrpf4mi.css';
import '../../css/c/cwzt0jbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfXNflcFE" x1="3.19" x2="20.8" y1="1.96" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGfXNflcFE)" class="pbr8ctpxb wm-k"/><path class="wm-a yse71bbsi"/><path class="vobrpf4mi wm-shine"/><path class="cwzt0jbpk wm-shine"/></g>`,
		"fallback": "withicons-lunar:tooth-crown",
	});
}

export default Component;
