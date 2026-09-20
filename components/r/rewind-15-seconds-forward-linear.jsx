import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnv03wbox.css';
import '../../css/m/mah77fbvh.css';
import '../../css/t/tgcis5bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fnv03wbox"/><path class="mah77fbvh"/><path class="tgcis5bxj"/></g>`,
		"fallback": "solar:rewind-15-seconds-forward-linear",
	});
}

export default Component;
