import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/z/z6bwj1u2i.css';
import '../../css/c/ccmgotb3v.css';
import '../../css/o/oksh76b7l.css';
import '../../css/z/zwu3gvzzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9GJ32pHC" x1="0" x2="0" y1="2.72" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGTdM3BbNA" x1="1.5" x2="22.49" y1="2.72" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG9GJ32pHC)" stroke="url(#SVGTdM3BbNA)" class="wm-k z6bwj1u2i"/><path stroke="url(#SVGTdM3BbNA)" class="ccmgotb3v wm-s"/><path class="oksh76b7l wm-shine"/><path class="wm-shine zwu3gvzzc"/></g>`,
		"fallback": "withicons-lunar:jack-o-lantern",
	});
}

export default Component;
