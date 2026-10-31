import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/lmzkuwafx.css';
import '../../css/l/l2sj8fbjg.css';
import '../../css/f/fra3ub6gd.css';
import '../../css/i/is4z3paxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFxP4NdGh" x1="0" x2="0" y1="2.01" y2="22.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGKDiCge9g" x1="1.06" x2="22" y1="2.01" y2="22.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGFxP4NdGh)" stroke="url(#SVGKDiCge9g)" class="lmzkuwafx wm-k"/><path stroke="url(#SVGKDiCge9g)" class="l2sj8fbjg wm-s"/><path class="fra3ub6gd wm-shine"/><path class="is4z3paxa wm-shine"/></g>`,
		"fallback": "withicons-lunar:star-off",
	});
}

export default Component;
