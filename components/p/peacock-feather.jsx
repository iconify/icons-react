import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/nc5cmyb4c.css';
import '../../css/r/rowcln3bh.css';
import '../../css/b/biz5a0dul.css';
import '../../css/n/np4_qcczj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6aGycdYJ" x1="0" x2="0" y1="1.59" y2="21.08" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGNDOnbd8A" x1="5.12" x2="21.4" y1="1.59" y2="21.08" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG6aGycdYJ)" stroke="url(#SVGNDOnbd8A)" class="nc5cmyb4c wm-k"/><path fill="url(#SVGNDOnbd8A)" class="rowcln3bh wm-a"/><path class="biz5a0dul wm-shine"/><path class="np4_qcczj wm-shine"/></g>`,
		"fallback": "withicons-lunar:peacock-feather",
	});
}

export default Component;
