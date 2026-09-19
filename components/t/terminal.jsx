import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fn2l9_eys.css';
import '../../css/c/cyvnx1b5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fn2l9_eys"/><path class="cyvnx1b5d"/></g>`,
		"fallback": "bi:terminal",
	});
}

export default Component;
