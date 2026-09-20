import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y2yhntbjs.css';
import '../../css/e/ezi0_rbbf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="y2yhntbjs"/><circle class="ezi0_rbbf"/></g>`,
		"fallback": "quill:paper",
	});
}

export default Component;
