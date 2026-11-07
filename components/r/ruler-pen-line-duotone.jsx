import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oo2qfubvl.css';
import '../../css/r/rtpnq8b2m.css';
import '../../css/u/u8u1igx1h.css';
import '../../css/h/h-mw_xb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oo2qfubvl"/><path class="rtpnq8b2m"/><path class="u8u1igx1h"/><path class="h-mw_xb8f"/></g>`,
		"fallback": "solar:ruler-pen-line-duotone",
	});
}

export default Component;
