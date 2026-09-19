import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_u5sdb8h.css';
import '../../css/n/no2l6bbzc.css';
import '../../css/h/hg3n9j_cg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_u5sdb8h"/><path class="no2l6bbzc"/><path class="hg3n9j_cg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-shrugging",
	});
}

export default Component;
