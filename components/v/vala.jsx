import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/t/t5p8as3wn.css';
import '../../css/k/kdecpsgdz.css';
import '../../css/v/vv0uqb1_a.css';
import '../../css/c/caqglacci.css';
import '../../css/p/p-qsk_moi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVGBL4vIecK)" class="ex-9i5bwz"/><path class="t5p8as3wn"/><path class="kdecpsgdz"/><path class="vv0uqb1_a"/><defs><linearGradient id="SVGBL4vIecK" x1="128" x2="128" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop class="caqglacci"/><stop offset="1" class="p-qsk_moi"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:vala",
	});
}

export default Component;
