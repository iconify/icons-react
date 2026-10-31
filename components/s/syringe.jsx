import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/dv6bwevrq.css';
import '../../css/c/c6vrogbki.css';
import '../../css/s/sc5nlvbfk.css';
import '../../css/h/harowacop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGe43ei6sR" x1="3.01" x2="22" y1="2.01" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGe43ei6sR)" class="dv6bwevrq wm-k"/><path fill="url(#SVGe43ei6sR)" class="c6vrogbki wm-a"/><path class="sc5nlvbfk wm-shine"/><path class="harowacop wm-shine"/></g>`,
		"fallback": "withicons-lunar:syringe",
	});
}

export default Component;
