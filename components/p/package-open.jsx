import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/tc78__bjn.css';
import '../../css/s/saf4eqrpk.css';
import '../../css/c/cmdhdbbwf.css';
import '../../css/h/h70dxe7sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqao7DeJI" x1="1" x2="23" y1="1.51" y2="22.14" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGqao7DeJI)" class="tc78__bjn wm-k"/><path class="saf4eqrpk wm-a"/><path class="cmdhdbbwf wm-shine"/><path class="h70dxe7sk wm-shine"/></g>`,
		"fallback": "withicons-lunar:package-open",
	});
}

export default Component;
