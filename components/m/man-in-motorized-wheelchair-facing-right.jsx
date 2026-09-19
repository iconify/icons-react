import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8idwqlpa.css';
import '../../css/j/jwcvhdcld.css';
import '../../css/e/e3fdoqbix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8idwqlpa"/><path class="jwcvhdcld"/><path class="e3fdoqbix"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-in-motorized-wheelchair-facing-right",
	});
}

export default Component;
