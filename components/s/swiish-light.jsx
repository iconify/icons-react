import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/r/rf2pjuppx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGiPlSzdct" x1="92.48" x2="428.538" y1="458.072" y2="79.034" gradientTransform="matrix(1 0 0 -1 0 513.45)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".836" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGiPlSzdct)" class="rf2pjuppx"/>`,
		"fallback": "selfhst:swiish-light",
	});
}

export default Component;
