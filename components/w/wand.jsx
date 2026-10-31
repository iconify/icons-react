import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/i2sh32i3z.css';
import '../../css/h/hi-5hjufa.css';
import '../../css/r/rdutk1bll.css';
import '../../css/q/q1lnlop7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOvt3JcOg" x1="0" x2="0" y1="2" y2="21.95" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG9e2oOcSp" x1="2.05" x2="22" y1="2" y2="21.95" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGOvt3JcOg)" stroke="url(#SVG9e2oOcSp)" class="i2sh32i3z wm-k"/><path fill="url(#SVG9e2oOcSp)" class="hi-5hjufa wm-a"/><path class="rdutk1bll wm-shine"/><path class="q1lnlop7d wm-shine"/></g>`,
		"fallback": "withicons-lunar:wand",
	});
}

export default Component;
