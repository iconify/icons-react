import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/f289gmi4x.css';
import '../../css/u/uaw3ssc2n.css';
import '../../css/c/cd7xrnl-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGanpifd0C" x1="3.5" x2="20.49" y1="1.78" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGanpifd0C)" class="f289gmi4x wm-k"/><path fill="url(#SVGanpifd0C)" class="uaw3ssc2n wm-a"/><path class="cd7xrnl-w wm-shine"/></g>`,
		"fallback": "withicons-lunar:microscope",
	});
}

export default Component;
