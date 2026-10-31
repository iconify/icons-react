import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/ume9mebrh.css';
import '../../css/t/tgnuzpb6j.css';
import '../../css/c/cl5qrl4fq.css';
import '../../css/h/hvx71n7ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSbC2LcLo" x1="1.5" x2="21.5" y1="4.5" y2="20.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGSbC2LcLo)" class="ume9mebrh wm-k"/><path class="tgnuzpb6j wm-a"/><path class="cl5qrl4fq wm-shine"/><path class="hvx71n7ta wm-shine"/></g>`,
		"fallback": "withicons-lunar:person-swimming",
	});
}

export default Component;
