import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2bpdcbor.css';
import '../../css/l/lkrnribtm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t2bpdcbor"/><path class="lkrnribtm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mountain-railway",
	});
}

export default Component;
