import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9jw2obzx.css';
import '../../css/t/tr0fwwk_h.css';
import '../../css/o/oesstzbre.css';
import '../../css/k/k3bf_kk4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGWJ2w5dul" x1="195.6" x2="363.6" y1="218.9" y2="379.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="h9jw2obzx"/><stop offset="1" class="tr0fwwk_h"/></linearGradient><path fill="url(#SVGWJ2w5dul)" class="oesstzbre"/><path class="k3bf_kk4e"/>`,
		"fallback": "selfhst:uptime-kuma",
	});
}

export default Component;
