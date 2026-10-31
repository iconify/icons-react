import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/ta6zef2ne.css';
import '../../css/d/dogm8mb1i.css';
import '../../css/b/bpge8kbcy.css';
import '../../css/l/lvxjvvbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG02Uixe0I" x1="3.02" x2="20.99" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG02Uixe0I)" class="ta6zef2ne wm-k"/><path class="dogm8mb1i wm-a"/><path class="bpge8kbcy wm-shine"/><path class="lvxjvvbvr wm-shine"/></g>`,
		"fallback": "withicons-lunar:lock-keyhole",
	});
}

export default Component;
