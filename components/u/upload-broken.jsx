import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zp18fn_9t.css';
import '../../css/s/sh6gkf2oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zp18fn_9t"/><path class="sh6gkf2oy"/></g>`,
		"fallback": "solar:upload-broken",
	});
}

export default Component;
