import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/rnxgaib7n.css';
import '../../css/k/k3it9uxcx.css';
import '../../css/i/isuan1lym.css';
import '../../css/a/a5l_2hkau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGogAZjdQq" x1="0" x2="0" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGr21d5c7G" x1="1.01" x2="21" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGogAZjdQq)" stroke="url(#SVGr21d5c7G)" class="rnxgaib7n wm-k"/><path fill="url(#SVGr21d5c7G)" class="k3it9uxcx wm-a"/><path class="isuan1lym wm-shine"/><path class="a5l_2hkau wm-shine"/></g>`,
		"fallback": "withicons-lunar:timer-reset",
	});
}

export default Component;
