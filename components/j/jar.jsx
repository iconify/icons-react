import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j813e1bdu.css';
import '../../css/d/d2wi4-9sh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j813e1bdu"/><path class="d2wi4-9sh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:jar",
	});
}

export default Component;
