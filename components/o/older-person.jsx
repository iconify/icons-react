import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlwf67b9d.css';
import '../../css/u/u4ohl8b_v.css';
import '../../css/y/yvqle-b-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlwf67b9d"/><path class="u4ohl8b_v"/><path class="yvqle-b-w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:older-person",
	});
}

export default Component;
