import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mun-f5k6r.css';
import '../../css/f/f6bq3-oon.css';
import '../../css/y/yb2eb2rfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mun-f5k6r wm-shadow"/><path class="f6bq3-oon wm-shadow"/><path class="yb2eb2rfm"/></g>`,
		"fallback": "withicons-brutal:list-checks",
	});
}

export default Component;
