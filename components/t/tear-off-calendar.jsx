import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5kqnjb0b.css';
import '../../css/y/yga-tacwk.css';
import '../../css/e/e0j_m1_-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d5kqnjb0b"/><path class="yga-tacwk"/><path class="e0j_m1_-l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tear-off-calendar",
	});
}

export default Component;
