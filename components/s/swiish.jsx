import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9ph4zbed.css';
import '../../css/x/x899aib7c.css';
import '../../css/r/rf2pjuppx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGU5ZETbQJ" x1="92.48" x2="428.538" y1="458.072" y2="79.034" gradientTransform="matrix(1 0 0 -1 0 513.45)" gradientUnits="userSpaceOnUse"><stop offset="0" class="i9ph4zbed"/><stop offset=".83" class="x899aib7c"/></linearGradient><path fill="url(#SVGU5ZETbQJ)" class="rf2pjuppx"/>`,
		"fallback": "selfhst:swiish",
	});
}

export default Component;
