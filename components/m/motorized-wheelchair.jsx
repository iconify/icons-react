import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxkil3b3n.css';
import '../../css/z/z82665tsc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rxkil3b3n"/><path class="z82665tsc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:motorized-wheelchair",
	});
}

export default Component;
