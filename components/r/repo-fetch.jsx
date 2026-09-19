import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trm14bb_w.css';
import '../../css/f/fl3cbbb-h.css';
import '../../css/j/j7oq_bbrs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="trm14bb_w"/><path clip-rule="evenodd" class="fl3cbbb-h"/><path class="j7oq_bbrs"/></g>`,
		"fallback": "codicon:repo-fetch",
	});
}

export default Component;
