import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/auxtnc08w.css';
import '../../css/q/qe4mrqlsa.css';
import '../../css/h/hudpb1_gi.css';
import '../../css/z/zpcggvbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5qWexdGf" x1="0" x2="0" y1="3" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG5FXksdWC" x1="1.51" x2="22.5" y1="3" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG5qWexdGf)" stroke="url(#SVG5FXksdWC)" class="auxtnc08w wm-k"/><path fill="url(#SVG5FXksdWC)" class="qe4mrqlsa wm-a"/><path class="hudpb1_gi wm-shine"/><path class="wm-shine zpcggvbgu"/></g>`,
		"fallback": "withicons-lunar:mails",
	});
}

export default Component;
