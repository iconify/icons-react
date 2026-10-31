import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/k/kugu2tbal.css';
import '../../css/e/eoz8w4b5b.css';
import '../../css/c/chc5su79j.css';
import '../../css/r/rql5f-ahw.css';
import '../../css/h/hph515otm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjftuteCB" x1="3.5" x2="20.5" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGjftuteCB)" class="kugu2tbal wm-k"/><path class="eoz8w4b5b wm-shine"/><path class="chc5su79j wm-shine"/><path class="rql5f-ahw wm-shine"/><path class="hph515otm wm-shine"/></g>`,
		"fallback": "withicons-lunar:shield-check",
	});
}

export default Component;
