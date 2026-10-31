import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/ljcdwivmx.css';
import '../../css/d/da14-kf6a.css';
import '../../css/w/whr8qi_9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzZxbgcsz" x1="1.51" x2="22" y1="5.51" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGzZxbgcsz)" class="ljcdwivmx wm-k"/><path class="da14-kf6a wm-shine"/><path class="whr8qi_9u wm-shine"/></g>`,
		"fallback": "withicons-lunar:trending-down",
	});
}

export default Component;
