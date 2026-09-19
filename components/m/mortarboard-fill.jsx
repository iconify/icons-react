import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/burizab4f.css';
import '../../css/j/j8iwwq4fq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="burizab4f"/><path class="j8iwwq4fq"/></g>`,
		"fallback": "bi:mortarboard-fill",
	});
}

export default Component;
