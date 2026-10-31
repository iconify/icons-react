import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/qtoj1kbvn.css';
import '../../css/i/i_6aejgmv.css';
import '../../css/i/ibrajsb5e.css';
import '../../css/t/ter5smfoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9KckeefL" x1="0" x2="0" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGiH0jDdjq" x1="2" x2="22" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG9KckeefL)" stroke="url(#SVGiH0jDdjq)" class="qtoj1kbvn wm-k"/><path fill="url(#SVGiH0jDdjq)" class="i_6aejgmv wm-a"/><path class="ibrajsb5e wm-shine"/><path class="ter5smfoc wm-shine"/></g>`,
		"fallback": "withicons-lunar:layout-template",
	});
}

export default Component;
