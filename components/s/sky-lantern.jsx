import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/fryeto45e.css';
import '../../css/m/mucqvwbva.css';
import '../../css/k/kc1aikx7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1p0Mzd6u" x1="0" x2="0" y1="1.01" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGEMlCRQWz" x1="5.5" x2="18.5" y1="1.01" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG1p0Mzd6u)" stroke="url(#SVGEMlCRQWz)" class="fryeto45e wm-k"/><path fill="url(#SVGEMlCRQWz)" class="mucqvwbva wm-a"/><path class="kc1aikx7n wm-shine"/></g>`,
		"fallback": "withicons-lunar:sky-lantern",
	});
}

export default Component;
