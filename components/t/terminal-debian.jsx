import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7pe1wg0f.css';
import '../../css/s/shg7yeb8k.css';
import '../../css/c/c9kt_qbdh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7pe1wg0f"/><path clip-rule="evenodd" class="shg7yeb8k"/><path class="c9kt_qbdh"/></g>`,
		"fallback": "codicon:terminal-debian",
	});
}

export default Component;
