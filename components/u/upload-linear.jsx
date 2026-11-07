import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyclmrbrf.css';
import '../../css/z/zp18fn_9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wyclmrbrf"/><path class="zp18fn_9t"/></g>`,
		"fallback": "solar:upload-linear",
	});
}

export default Component;
