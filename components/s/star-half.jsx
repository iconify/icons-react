import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/d68plccdf.css';
import '../../css/q/qmqit4kqk.css';
import '../../css/j/j86snk2fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJtTVTb5K" x1="1.49" x2="22.51" y1="1.95" y2="22.04" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGJtTVTb5K)" class="d68plccdf wm-k"/><path class="qmqit4kqk wm-shine"/><path class="j86snk2fv wm-shine"/></g>`,
		"fallback": "withicons-lunar:star-half",
	});
}

export default Component;
