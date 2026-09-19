import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btwgzx3zj.css';
import '../../css/v/vy1dqlccp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="btwgzx3zj"/><path class="vy1dqlccp"/></g>`,
		"fallback": "garden:user-solo-fill-16",
	});
}

export default Component;
