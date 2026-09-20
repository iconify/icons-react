import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy7_7wa8u.css';
import '../../css/e/e507l5bmm.css';
import '../../css/c/cnmlbv_ah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGp4mlkcnW" x1="0" x2="512" y1="257.97" y2="257.97" gradientTransform="matrix(1 0 0 -1 0 513.97)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gy7_7wa8u"/><stop offset="1" class="e507l5bmm"/></linearGradient><path fill="url(#SVGp4mlkcnW)" class="cnmlbv_ah"/>`,
		"fallback": "selfhst:tigera",
	});
}

export default Component;
