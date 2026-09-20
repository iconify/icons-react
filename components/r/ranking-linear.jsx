import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hs8rvvlxb.css';
import '../../css/h/h1ru3ab8h.css';
import '../../css/f/f8lgfinhu.css';
import '../../css/s/sbmqfhzny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hs8rvvlxb"/><path class="h1ru3ab8h"/><path class="f8lgfinhu"/><path class="sbmqfhzny"/></g>`,
		"fallback": "solar:ranking-linear",
	});
}

export default Component;
