import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/p/pvhi0w5rg.css';
import '../../css/f/f9pc972ct.css';
import '../../css/v/vg5m8idtl.css';
import '../../css/u/us46ybcfa.css';
import '../../css/i/ifvgct4bz.css';
import '../../css/t/t4k3qlbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGE8pqpdMb" cx="8.3" cy="8.41" r="21.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="pvhi0w5rg wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="f9pc972ct wm-a"/><path fill="url(#SVGE8pqpdMb)" class="vg5m8idtl wm-k"/><path class="us46ybcfa wm-shine"/><path class="ifvgct4bz wm-deco"/><path class="t4k3qlbfs wm-deco"/></g>`,
		"fallback": "withicons-rangoli:microscope",
	});
}

export default Component;
