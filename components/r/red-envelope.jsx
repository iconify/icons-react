import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/t/tws9pwb3v.css';
import '../../css/n/nqsv5brhc.css';
import '../../css/g/godnjhlil.css';
import '../../css/y/yn6-n8ttv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQc3tC3Al" x1="0" x2="0" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGKPQjYdhb" x1="4" x2="20" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGQc3tC3Al)" stroke="url(#SVGKPQjYdhb)" class="tws9pwb3v wm-k"/><path fill="url(#SVGKPQjYdhb)" class="nqsv5brhc wm-s"/><path class="godnjhlil wm-shine"/><path class="wm-shine yn6-n8ttv"/></g>`,
		"fallback": "withicons-lunar:red-envelope",
	});
}

export default Component;
