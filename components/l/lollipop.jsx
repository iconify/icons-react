import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q7c4yb3qw.css';
import '../../css/a/abeikob_c.css';
import '../../css/i/iz8f1z7zh.css';
import '../../css/x/xwp85rl6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNYXVEbLB" x1="0" x2="0" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGMWZoPbva" x1="2.01" x2="22.48" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGNYXVEbLB)" stroke="url(#SVGMWZoPbva)" class="q7c4yb3qw wm-k"/><path fill="url(#SVGMWZoPbva)" class="abeikob_c wm-a"/><path class="iz8f1z7zh wm-shine"/><path class="wm-shine xwp85rl6c"/></g>`,
		"fallback": "withicons-lunar:lollipop",
	});
}

export default Component;
