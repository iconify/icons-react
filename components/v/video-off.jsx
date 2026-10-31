import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/ei5pnibvp.css';
import '../../css/l/l2sj8fbjg.css';
import '../../css/t/t5ow83bjo.css';
import '../../css/p/pya3brb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgTjCRb6x" x1="0" x2="0" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG6eagTb5d" x1="1.01" x2="22" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGgTjCRb6x)" stroke="url(#SVG6eagTb5d)" class="ei5pnibvp wm-k"/><path stroke="url(#SVG6eagTb5d)" class="l2sj8fbjg wm-s"/><path class="t5ow83bjo wm-shine"/><path class="pya3brb8k wm-shine"/></g>`,
		"fallback": "withicons-lunar:video-off",
	});
}

export default Component;
