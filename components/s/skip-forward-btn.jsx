import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_xac1f5s.css';
import '../../css/x/xjy3z5hee.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_xac1f5s"/><path class="xjy3z5hee"/></g>`,
		"fallback": "bi:skip-forward-btn",
	});
}

export default Component;
