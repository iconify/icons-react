import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/y/ym4csxr6z.css';
import '../../css/h/h8jdym50p.css';
import '../../css/p/pjpv0vbbv.css';
import '../../css/g/g3bddhzuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqgonpcOK" x1="0" x2="0" y1="4.64" y2="19.36" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGZyOw5dVk" x1="2" x2="21.49" y1="4.64" y2="19.36" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGqgonpcOK)" stroke="url(#SVGZyOw5dVk)" class="wm-k ym4csxr6z"/><path fill="url(#SVGZyOw5dVk)" class="h8jdym50p wm-a"/><path class="pjpv0vbbv wm-shine"/><path class="g3bddhzuj wm-shine"/></g>`,
		"fallback": "withicons-lunar:volume",
	});
}

export default Component;
