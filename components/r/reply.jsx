import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/ai8h1gkng.css';
import '../../css/g/gh5jmabpd.css';
import '../../css/k/k-_llvb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGg4TKpeeE" x1="0" x2="0" y1="3.5" y2="20.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGgOuEIdhZ" x1="2.5" x2="21" y1="3.5" y2="20.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGg4TKpeeE)" stroke="url(#SVGgOuEIdhZ)" class="ai8h1gkng wm-k"/><path class="gh5jmabpd wm-shine"/><path class="k-_llvb-k wm-shine"/></g>`,
		"fallback": "withicons-lunar:reply",
	});
}

export default Component;
