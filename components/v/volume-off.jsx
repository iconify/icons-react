import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/hyy64ybgg.css';
import '../../css/b/blo86o6pl.css';
import '../../css/v/v-sfdnamh.css';
import '../../css/b/bj2akzwpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGDvOSbeN" x1="0" x2="0" y1="4.73" y2="19.26" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGKHiuVbtn" x1="2" x2="21.75" y1="4.73" y2="19.26" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGGDvOSbeN)" stroke="url(#SVGKHiuVbtn)" class="hyy64ybgg wm-k"/><path stroke="url(#SVGKHiuVbtn)" class="blo86o6pl wm-s"/><path class="v-sfdnamh wm-shine"/><path class="bj2akzwpz wm-shine"/></g>`,
		"fallback": "withicons-lunar:volume-off",
	});
}

export default Component;
