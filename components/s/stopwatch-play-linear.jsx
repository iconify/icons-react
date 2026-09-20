import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vzo3ypbps.css';
import '../../css/u/u8gkuv4uz.css';
import '../../css/o/oi9ky1bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="vzo3ypbps"/><path class="u8gkuv4uz"/><path class="oi9ky1bdz"/></g>`,
		"fallback": "solar:stopwatch-play-linear",
	});
}

export default Component;
