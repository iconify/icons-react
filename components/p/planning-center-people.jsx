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
		"content": `<linearGradient id="SVGZaz6ieOu" x1="840.502" x2="1864.498" y1="781.092" y2="1805.002" gradientTransform="matrix(.4 0 0 .4 -285 -261.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qd-f4zb5v"/><stop offset="1" class="d4k1539jp"/></linearGradient><path fill="url(#SVGZaz6ieOu)" class="v_xkw1bvd"/><path class="oihsidcaa"/>`,
		"fallback": "selfhst:planning-center-people",
	});
}

export default Component;
