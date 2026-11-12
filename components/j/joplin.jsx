import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhu-ikbsy.css';
import '../../css/z/zsjzf-bwd.css';
import '../../css/h/hj5shcbbd.css';
import '../../css/i/iq1sfabpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGmD3Gfe0U" x1="475.3" x2="431.4" y1="475.6" y2="431.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="yhu-ikbsy"/><stop offset="1" class="zsjzf-bwd"/></linearGradient><path fill="url(#SVGmD3Gfe0U)" class="hj5shcbbd"/><path class="iq1sfabpz"/>`,
		"fallback": "selfhst:joplin",
	});
}

export default Component;
