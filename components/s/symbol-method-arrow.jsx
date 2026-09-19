import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1dzi7biv.css';
import '../../css/q/qtsnc0bxz.css';
import '../../css/b/bau06jt7d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1dzi7biv"/><path class="qtsnc0bxz"/><path class="bau06jt7d"/></g>`,
		"fallback": "codicon:symbol-method-arrow",
	});
}

export default Component;
