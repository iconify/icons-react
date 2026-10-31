import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/wkft4lx6z.css';
import '../../css/h/hdg4lrcgp.css';
import '../../css/a/ahaui-t2q.css';
import '../../css/w/wyc0a9jxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG27ulsQDB" x1="1" x2="23" y1="1.01" y2="22.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG27ulsQDB)" class="wkft4lx6z wm-k"/><path class="hdg4lrcgp wm-a"/><path class="ahaui-t2q wm-shine"/><path class="wm-shine wyc0a9jxl"/></g>`,
		"fallback": "withicons-lunar:sun",
	});
}

export default Component;
