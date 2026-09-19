import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f98z2tb0h.css';
import '../../css/i/ioj0n_bvi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f98z2tb0h"/><path class="ioj0n_bvi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sneezing-face",
	});
}

export default Component;
