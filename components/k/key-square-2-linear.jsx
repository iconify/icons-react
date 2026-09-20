import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ifl90v8zt.css';
import '../../css/y/yt37axb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ifl90v8zt"/><path class="yt37axb7r"/></g>`,
		"fallback": "solar:key-square-2-linear",
	});
}

export default Component;
