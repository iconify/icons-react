import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/fo0jtjblo.css';
import '../../css/m/m8c_3ib9v.css';
import '../../css/t/tyjf_-jsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGogAZjdQq" x1="0" x2="0" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGy0GmzeeV" x1="4.5" x2="19.48" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGogAZjdQq)" stroke="url(#SVGy0GmzeeV)" class="fo0jtjblo wm-k"/><path fill="url(#SVGy0GmzeeV)" class="m8c_3ib9v wm-a"/><path class="tyjf_-jsb wm-shine"/></g>`,
		"fallback": "withicons-lunar:nutcracker",
	});
}

export default Component;
