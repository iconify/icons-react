import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lz3bu1b6q.css';
import '../../css/r/rt-9yzb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lz3bu1b6q"/><path class="rt-9yzb8x"/></g>`,
		"fallback": "andrsrxn:signal-medium",
	});
}

export default Component;
