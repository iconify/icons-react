import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/k/kvlhq7bak.css';
import '../../css/f/fj5vadcje.css';
import '../../css/f/fdc9b9bbh.css';
import '../../css/w/wr6vqvz1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJ1ug6xeB" x1="0" x2="0" y1="5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGYu4G9cCi" x1="1" x2="23" y1="5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGJ1ug6xeB)" stroke="url(#SVGYu4G9cCi)" class="kvlhq7bak wm-k"/><path fill="url(#SVGYu4G9cCi)" class="fj5vadcje wm-a"/><path class="fdc9b9bbh wm-shine"/><path class="wm-shine wr6vqvz1d"/></g>`,
		"fallback": "withicons-lunar:router",
	});
}

export default Component;
