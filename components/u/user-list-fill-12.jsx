import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhhvmrp6h.css';
import '../../css/j/j61svgbnj.css';
import '../../css/q/qym7_6bvn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="rhhvmrp6h"/><path class="j61svgbnj"/></g><path class="qym7_6bvn"/>`,
		"fallback": "garden:user-list-fill-12",
	});
}

export default Component;
