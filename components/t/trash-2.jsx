import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/l58a-_bbe.css';
import '../../css/k/ksngsabyw.css';
import '../../css/d/dxsbnyb5i.css';
import '../../css/e/e3saz9bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9RV51dNJ" x1="0" x2="0" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGdbzECeyo" x1="2" x2="21.99" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG9RV51dNJ)" stroke="url(#SVGdbzECeyo)" class="l58a-_bbe wm-k"/><path fill="url(#SVGdbzECeyo)" class="ksngsabyw wm-a"/><path class="dxsbnyb5i wm-shine"/><path class="e3saz9bmh wm-shine"/></g>`,
		"fallback": "withicons-lunar:trash-2",
	});
}

export default Component;
