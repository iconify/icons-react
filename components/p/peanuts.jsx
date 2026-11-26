import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk4it_c0i.css';
import '../../css/p/pvsthhbqb.css';
import '../../css/x/xgyroib4d.css';
import '../../css/w/w15t1rb0o.css';
import '../../css/q/qon3ebb5k.css';
import '../../css/w/wj5xe493j.css';
import '../../css/u/ug-vv7byn.css';
import '../../css/x/xokmczsdt.css';
import '../../css/q/q1g45up1o.css';
import '../../css/h/h5ygd9rpx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGFiU0kcks" cx="53.8" cy="71.8" r="112.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="jk4it_c0i"/><stop offset=".85" class="pvsthhbqb"/><stop offset="1" class="pvsthhbqb"/></radialGradient><radialGradient id="SVGbuZq8HHx" cx="120.8" cy="81.7" r="113.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="jk4it_c0i"/><stop offset=".85" class="pvsthhbqb"/><stop offset="1" class="pvsthhbqb"/></radialGradient></defs><path class="xgyroib4d"/><path fill="url(#SVGFiU0kcks)" transform="matrix(2.7 0 0 2.7 -20.353 -31.723)" class="w15t1rb0o"/><path class="qon3ebb5k"/><path class="wj5xe493j"/><path class="ug-vv7byn"/><path fill="url(#SVGbuZq8HHx)" transform="matrix(2.7 0 0 2.7 -20.353 -31.723)" class="xokmczsdt"/><path class="q1g45up1o"/><path class="h5ygd9rpx"/>`,
		"fallback": "xero-emoji:peanuts",
	});
}

export default Component;
