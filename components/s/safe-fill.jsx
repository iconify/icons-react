import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ah30z5xly.css';
import '../../css/l/lc69j_npx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ah30z5xly"/><path class="lc69j_npx"/></g>`,
		"fallback": "bi:safe-fill",
	});
}

export default Component;
