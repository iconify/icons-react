import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbykqmm-k.css';
import '../../css/v/vj2wocbip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbykqmm-k"/><path class="vj2wocbip"/></g>`,
		"fallback": "at-icons:location",
	});
}

export default Component;
