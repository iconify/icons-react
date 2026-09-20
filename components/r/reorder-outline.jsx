import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2r4blint.css';
import '../../css/g/g6gtmxbue.css';
import '../../css/p/pxc43wbmd.css';
import '../../css/n/nyhs13d2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2r4blint"/><path class="g6gtmxbue"/><path class="pxc43wbmd"/><path class="nyhs13d2z"/></g>`,
		"fallback": "solar:reorder-outline",
	});
}

export default Component;
