import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bozbivqdd.css';
import '../../css/p/pxm7_12cz.css';
import '../../css/u/u8gkuv4uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bozbivqdd"/><path class="pxm7_12cz"/><path class="u8gkuv4uz"/></g>`,
		"fallback": "solar:stopwatch-linear",
	});
}

export default Component;
