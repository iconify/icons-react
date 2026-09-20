import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzu6ipmgy.css';
import '../../css/u/us_lcey2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wzu6ipmgy"/><path class="us_lcey2a"/></g>`,
		"fallback": "rivet-icons:upload",
	});
}

export default Component;
