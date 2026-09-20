import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9u8nhb5n.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/n/ngr3dgbao.css';
import '../../css/c/cxu04hbbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG8zUQJcFO" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="v9u8nhb5n"/><stop offset="1" class="qx32gdm7x"/></linearGradient><path fill="url(#SVG8zUQJcFO)" class="ngr3dgbao"/><path class="cxu04hbbv"/>`,
		"fallback": "selfhst:tasktrove-dark",
	});
}

export default Component;
