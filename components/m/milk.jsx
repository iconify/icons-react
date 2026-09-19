import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j7ziy6efr.css';
import '../../css/w/w5pb9bi0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="j7ziy6efr"/><path class="w5pb9bi0q"/></g>`,
		"fallback": "hugeicons:milk",
	});
}

export default Component;
