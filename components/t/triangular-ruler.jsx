import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbf1kvbei.css';
import '../../css/e/eaq9h1sxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jbf1kvbei"/><path class="eaq9h1sxw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:triangular-ruler",
	});
}

export default Component;
