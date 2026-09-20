import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhrs64bsk.css';
import '../../css/m/m3ytibb1b.css';
import '../../css/m/mfuh3fbwr.css';
import '../../css/k/kxr93cbsn.css';
import '../../css/b/bov0584ws.css';
import '../../css/i/i74u_tb5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGEl7m4dhk" x1="256" x2="256" y1="-2.388" y2="441.6" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xhrs64bsk"/><stop offset=".25" class="m3ytibb1b"/><stop offset=".758" class="mfuh3fbwr"/><stop offset="1" class="kxr93cbsn"/></linearGradient><path fill="url(#SVGEl7m4dhk)" class="bov0584ws"/><path class="i74u_tb5e"/>`,
		"fallback": "selfhst:openaudible",
	});
}

export default Component;
