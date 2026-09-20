import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j60cmpbfd.css';
import '../../css/k/kh4olvbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j60cmpbfd"/><path clip-rule="evenodd" class="kh4olvbyz"/></g>`,
		"fallback": "solar:point-on-map-bold",
	});
}

export default Component;
