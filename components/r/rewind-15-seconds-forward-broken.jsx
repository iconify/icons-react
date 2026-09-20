import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mah77fbvh.css';
import '../../css/t/tgcis5bxj.css';
import '../../css/t/t8nvgqtdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mah77fbvh"/><path class="tgcis5bxj"/><path class="t8nvgqtdk"/></g>`,
		"fallback": "solar:rewind-15-seconds-forward-broken",
	});
}

export default Component;
