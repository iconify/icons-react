import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-gih8m5c.css';
import '../../css/c/cfk99iv4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-gih8m5c"/><path class="cfk99iv4d"/></g>`,
		"fallback": "bi:slash-square",
	});
}

export default Component;
