import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pt-lo5-fy.css';
import '../../css/k/k6cm-uc4x.css';
import '../../css/y/y78f-q27q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pt-lo5-fy"/><path class="k6cm-uc4x"/><path class="y78f-q27q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pregnant-person",
	});
}

export default Component;
