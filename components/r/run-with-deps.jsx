import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ul0c7wb_k.css';
import '../../css/e/esbapuc5c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ul0c7wb_k"/><path class="esbapuc5c"/></g>`,
		"fallback": "codicon:run-with-deps",
	});
}

export default Component;
