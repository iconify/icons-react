import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm_ste21z.css';
import '../../css/m/m7rzspbge.css';
import '../../css/c/c6rjz91lt.css';
import '../../css/j/jbbtftbrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGv5Xsmd0j" x1="256" x2="256" y1="14.331" y2="497.669" gradientUnits="userSpaceOnUse"><stop offset="0" class="gm_ste21z"/><stop offset="1" class="m7rzspbge"/></linearGradient><path fill="url(#SVGv5Xsmd0j)" class="c6rjz91lt"/><path class="jbbtftbrr"/>`,
		"fallback": "selfhst:microsoft-word-2013",
	});
}

export default Component;
