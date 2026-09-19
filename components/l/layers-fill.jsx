import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yww0letex.css';
import '../../css/y/ysn97rsyw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yww0letex"/><path class="ysn97rsyw"/></g>`,
		"fallback": "bi:layers-fill",
	});
}

export default Component;
