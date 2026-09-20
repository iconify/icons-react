import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_qts-b_r.css';
import '../../css/k/krzr9662y.css';
import '../../css/z/zmtq5epxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG3U66IboI" x1="-695.575" x2="-519.089" y1="422.325" y2="327.556" gradientTransform="rotate(105.001 1263.195 108.381)scale(-2.8347 2.8347)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="p_qts-b_r"/></linearGradient><path fill="url(#SVG3U66IboI)" class="krzr9662y"/><path class="zmtq5epxi"/>`,
		"fallback": "selfhst:re-command-dark",
	});
}

export default Component;
