import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/h-sjll3dz.css';
import '../../css/q/q9y91ibla.css';
import '../../css/z/zlogacbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNVnj6bma" x1="2.01" x2="22" y1="4.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGNVnj6bma)" class="h-sjll3dz wm-k"/><path stroke="url(#SVGNVnj6bma)" class="q9y91ibla wm-s"/><path class="wm-shine zlogacbfg"/></g>`,
		"fallback": "withicons-lunar:text-sparkles",
	});
}

export default Component;
