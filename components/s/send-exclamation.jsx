import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktszzubwe.css';
import '../../css/k/k6w-m32zw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktszzubwe"/><path class="k6w-m32zw"/></g>`,
		"fallback": "bi:send-exclamation",
	});
}

export default Component;
