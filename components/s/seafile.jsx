import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwsqs5bzr.css';
import '../../css/b/b0ea5lb7o.css';
import '../../css/j/j48clrlca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGtHKZNdYr" x1="256" x2="256" y1="91.1" y2="421.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="lwsqs5bzr"/><stop offset="1" class="b0ea5lb7o"/></linearGradient><path fill="url(#SVGtHKZNdYr)" class="j48clrlca"/>`,
		"fallback": "selfhst:seafile",
	});
}

export default Component;
