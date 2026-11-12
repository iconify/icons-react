import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-txusbyn.css';
import '../../css/i/i43qr5u2f.css';
import '../../css/i/i04a-1b-v.css';
import '../../css/q/qh-dmzbvl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGrmC2ElnH" x1="21.8" x2="445.2" y1="74.4" y2="393.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="z-txusbyn"/><stop offset="1" class="i43qr5u2f"/></linearGradient><path fill="url(#SVGrmC2ElnH)" class="i04a-1b-v"/><path class="qh-dmzbvl"/>`,
		"fallback": "selfhst:ntfy",
	});
}

export default Component;
