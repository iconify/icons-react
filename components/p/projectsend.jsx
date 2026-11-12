import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg4p2bc8g.css';
import '../../css/p/p92lynpoq.css';
import '../../css/l/lkv5ngb6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGpE1RZbAk" x1="77.2" x2="414" y1="424" y2="98.7" gradientUnits="userSpaceOnUse"><stop offset=".168" class="qg4p2bc8g"/><stop offset=".813" class="p92lynpoq"/></linearGradient><path fill="url(#SVGpE1RZbAk)" class="lkv5ngb6h"/>`,
		"fallback": "selfhst:projectsend",
	});
}

export default Component;
