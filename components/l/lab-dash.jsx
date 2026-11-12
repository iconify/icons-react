import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je4206bpc.css';
import '../../css/i/idop4_bfq.css';
import '../../css/n/n6p3t0bwu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG3goxwxyW" x1="442.6" x2="92.3" y1="522.5" y2="172.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="je4206bpc"/><stop offset="1" class="idop4_bfq"/></linearGradient><path fill="url(#SVG3goxwxyW)" class="n6p3t0bwu"/>`,
		"fallback": "selfhst:lab-dash",
	});
}

export default Component;
