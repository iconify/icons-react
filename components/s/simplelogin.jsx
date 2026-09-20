import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxzlx69ao.css';
import '../../css/f/f2mdsnbel.css';
import '../../css/w/wqzu09b6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGhf8rIb8z" x1="-2.909" x2="1343.613" y1="257" y2="257" gradientTransform="matrix(1 0 0 -1 0 513)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pxzlx69ao"/><stop offset="1" class="f2mdsnbel"/></linearGradient><path fill="url(#SVGhf8rIb8z)" class="wqzu09b6l"/>`,
		"fallback": "selfhst:simplelogin",
	});
}

export default Component;
