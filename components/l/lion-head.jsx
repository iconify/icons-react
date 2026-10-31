import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/k/kkdcdhxxt.css';
import '../../css/y/y_5nwlb0x.css';
import '../../css/z/zs1ex0bhl.css';
import '../../css/u/uvnrtg4-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdVR6DbKv" x1="0" x2="0" y1="1.25" y2="22.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGtJCdTMns" x1="1.05" x2="22.95" y1="1.25" y2="22.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGdVR6DbKv)" stroke="url(#SVGtJCdTMns)" class="kkdcdhxxt wm-k"/><path fill="url(#SVGtJCdTMns)" class="wm-s y_5nwlb0x"/><path class="wm-shine zs1ex0bhl"/><path class="uvnrtg4-s wm-shine"/></g>`,
		"fallback": "withicons-lunar:lion-head",
	});
}

export default Component;
