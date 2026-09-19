import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzd8z06mk.css';
import '../../css/r/r_m369bhl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzd8z06mk"/><path clip-rule="evenodd" class="r_m369bhl"/></g>`,
		"fallback": "codicon:terminal-compact",
	});
}

export default Component;
