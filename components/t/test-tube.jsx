import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/azutczb5d.css';
import '../../css/l/l53uixj9u.css';
import '../../css/n/n6meimbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLEeUYcLp" x1="4.18" x2="22.18" y1="1.82" y2="19.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGLEeUYcLp)" class="azutczb5d wm-k"/><path class="l53uixj9u wm-shine"/><path class="n6meimbxx wm-shine"/></g>`,
		"fallback": "withicons-lunar:test-tube",
	});
}

export default Component;
