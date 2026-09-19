import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-r76-bue.css';
import '../../css/r/rtunbrb_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="z-r76-bue"/><path class="rtunbrb_s"/></g>`,
		"fallback": "garden:monitor-fill-16",
	});
}

export default Component;
