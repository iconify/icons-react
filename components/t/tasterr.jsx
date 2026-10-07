import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf402mu6g.css';
import '../../css/p/p1ws50bgn.css';
import '../../css/i/i8__78bqh.css';
import '../../css/v/veeyafb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf402mu6g"/><linearGradient id="SVGyx5nrbNa" x1="136" x2="424" y1="426" y2="138" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="p1ws50bgn"/><stop offset="1" class="i8__78bqh"/></linearGradient><path fill="url(#SVGyx5nrbNa)" class="veeyafb3e"/>`,
		"fallback": "selfhst:tasterr",
	});
}

export default Component;
