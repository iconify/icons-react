import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yqexgb7hx.css';
import '../../css/v/vv3m6lbyb.css';
import '../../css/r/r9eucsbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yqexgb7hx"/><path class="vv3m6lbyb"/><path class="r9eucsbka"/></g>`,
		"fallback": "solar:minimize-square-3-linear",
	});
}

export default Component;
