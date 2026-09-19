import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8ja2jrrf.css';
import '../../css/i/ikpuaxd0t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8ja2jrrf"/><path class="ikpuaxd0t"/></g>`,
		"fallback": "at-icons:thermometer",
	});
}

export default Component;
