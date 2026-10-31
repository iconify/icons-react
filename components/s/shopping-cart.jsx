import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/lgvh7db1i.css';
import '../../css/n/nbg9p2bkl.css';
import '../../css/m/m3ixd0b4x.css';
import '../../css/r/rzf0v1bno.css';
import '../../css/w/wi14lnbnu.css';
import '../../css/v/vphx268sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGudHgucJZ" x1="1.51" x2="21.49" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGudHgucJZ)" class="lgvh7db1i wm-k"/><path class="nbg9p2bkl wm-a"/><path class="m3ixd0b4x wm-shine"/><path class="rzf0v1bno wm-shine"/><path class="wi14lnbnu wm-shine"/><path class="vphx268sp wm-shine"/></g>`,
		"fallback": "withicons-lunar:shopping-cart",
	});
}

export default Component;
