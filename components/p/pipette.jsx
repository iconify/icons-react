import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/dfcm-ibmc.css';
import '../../css/k/k0rhoqhap.css';
import '../../css/f/f275u4bwe.css';
import '../../css/i/ifr__bb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSD2fMLHZ" x1="0" x2="0" y1="2.75" y2="21.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGGhytuekW" x1="2.51" x2="21.26" y1="2.75" y2="21.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGSD2fMLHZ)" stroke="url(#SVGGhytuekW)" class="dfcm-ibmc wm-k"/><path fill="url(#SVGGhytuekW)" class="k0rhoqhap wm-a"/><path class="f275u4bwe wm-shine"/><path class="ifr__bb8d wm-shine"/></g>`,
		"fallback": "withicons-lunar:pipette",
	});
}

export default Component;
