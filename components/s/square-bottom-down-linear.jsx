import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yqexgb7hx.css';
import '../../css/i/i-rawkqvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yqexgb7hx"/><path class="i-rawkqvp"/></g>`,
		"fallback": "solar:square-bottom-down-linear",
	});
}

export default Component;
