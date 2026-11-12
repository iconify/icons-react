import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd-f4zb5v.css';
import '../../css/d/d4k1539jp.css';
import '../../css/v/v_xkw1bvd.css';
import '../../css/o/oihsidcaa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG7abINnPp" x1="51.2" x2="460.8" y1="51.2" y2="460.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="qd-f4zb5v"/><stop offset="1" class="d4k1539jp"/></linearGradient><path fill="url(#SVG7abINnPp)" class="v_xkw1bvd"/><path class="oihsidcaa"/>`,
		"fallback": "selfhst:planning-center-people",
	});
}

export default Component;
