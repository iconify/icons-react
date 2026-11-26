import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2wvu6s6z.css';
import '../../css/u/uat9422lg.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/h/h5gpkjb-y.css';
import '../../css/n/nk138_b6c.css';
import '../../css/y/yuwyb1bhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGIsSIwcyU" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="d2wvu6s6z"/><stop offset=".85" class="uat9422lg"/><stop offset="1" class="uat9422lg"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGIsSIwcyU)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="h5gpkjb-y"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`,
		"fallback": "xero-emoji:purple-circle",
	});
}

export default Component;
