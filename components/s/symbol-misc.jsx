import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev_asvb8j.css';
import '../../css/k/k7rkevbtk.css';
import '../../css/j/ji-3ebcbp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ev_asvb8j"/><path class="k7rkevbtk"/><path class="ji-3ebcbp"/></g>`,
		"fallback": "codicon:symbol-misc",
	});
}

export default Component;
