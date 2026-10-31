import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/s/sdqxxvf1u.css';
import '../../css/r/r9wylackh.css';
import '../../css/t/t5g-cbb-l.css';
import '../../css/w/w00p8z8-q.css';
import '../../css/k/ksbq82bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwEk4JeNf" x1="2.39" x2="21.6" y1="2.37" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGwEk4JeNf)" class="sdqxxvf1u wm-k"/><path class="r9wylackh wm-shine"/><path class="t5g-cbb-l wm-shine"/><path class="w00p8z8-q wm-shine"/><path class="ksbq82bxb wm-shine"/></g>`,
		"fallback": "withicons-lunar:tooth",
	});
}

export default Component;
