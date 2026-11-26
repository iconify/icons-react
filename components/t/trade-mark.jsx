import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/u/up4jdvb8o.css';
import '../../css/a/ajavusbzy.css';
import '../../css/r/rsko56dkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGPg1hCeYu" cx="99" cy="81.2" r="81.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="up4jdvb8o"/><path fill="url(#SVGPg1hCeYu)" transform="matrix(2.7 0 0 2.7 -11.78 -8.42)" class="ajavusbzy"/><path class="rsko56dkt"/>`,
		"fallback": "xero-emoji:trade-mark",
	});
}

export default Component;
