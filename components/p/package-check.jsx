import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/arp0kpovi.css';
import '../../css/f/f3p2wsbsv.css';
import '../../css/n/nd1i_wbrs.css';
import '../../css/r/rvvct3b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGuBUIddoh" x1="2" x2="22" y1="1.5" y2="22.12" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGuBUIddoh)" class="arp0kpovi wm-k"/><path stroke="url(#SVGuBUIddoh)" class="f3p2wsbsv wm-s"/><path class="nd1i_wbrs wm-shine"/><path class="rvvct3b-v wm-shine"/></g>`,
		"fallback": "withicons-lunar:package-check",
	});
}

export default Component;
