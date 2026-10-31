import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/y/y2qqm_gwj.css';
import '../../css/p/p76rzvbot.css';
import '../../css/v/v_6nmw1yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRebKbbHI" x1="0" x2="0" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGJg2vUdLR" x1="1.01" x2="22.99" y1="4" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGRebKbbHI)" stroke="url(#SVGJg2vUdLR)" class="wm-k y2qqm_gwj"/><path class="p76rzvbot wm-shine"/><path class="v_6nmw1yr wm-shine"/></g>`,
		"fallback": "withicons-lunar:mountain-snow",
	});
}

export default Component;
