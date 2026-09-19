import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8h4q4bfd.css';
import '../../css/q/ql3hqacfh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e8h4q4bfd"/><path clip-rule="evenodd" class="ql3hqacfh"/></g>`,
		"fallback": "codicon:repo-pull",
	});
}

export default Component;
