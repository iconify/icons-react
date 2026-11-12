import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98y_fk5b.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/wsvgiff-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGMrT7fbqd" x1="20.4" x2="398.5" y1="491.6" y2="113.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="c98y_fk5b"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGMrT7fbqd)" class="wsvgiff-m"/>`,
		"fallback": "selfhst:swetrix-light",
	});
}

export default Component;
