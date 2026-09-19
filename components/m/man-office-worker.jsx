import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxsie3b8b.css';
import '../../css/c/cnlsa2f2b.css';
import '../../css/t/ts11t6b7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pxsie3b8b"/><path class="cnlsa2f2b"/><path class="ts11t6b7c"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-office-worker",
	});
}

export default Component;
