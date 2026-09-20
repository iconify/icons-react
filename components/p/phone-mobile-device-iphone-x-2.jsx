import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xpth2cc8o.css';
import '../../css/i/inzjpeb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xpth2cc8o"/><path class="inzjpeb5c"/></g>`,
		"fallback": "streamline-ultimate:phone-mobile-device-iphone-x-2",
	});
}

export default Component;
