import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/b/buo4hupuz.css';
import '../../css/r/r979a8rsd.css';
import '../../css/g/gcaqc28qx.css';
import '../../css/n/nyj8hnbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGr5HRPbgf" x1="0" x2="0" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGdhO6ubhh" x1="3.5" x2="20.5" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGr5HRPbgf)" stroke="url(#SVGdhO6ubhh)" class="buo4hupuz wm-k"/><path fill="url(#SVGdhO6ubhh)" class="r979a8rsd wm-a"/><path class="gcaqc28qx wm-shine"/><path class="nyj8hnbqk wm-shine"/></g>`,
		"fallback": "withicons-lunar:skip-forward",
	});
}

export default Component;
