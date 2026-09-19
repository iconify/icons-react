import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzqqqeyxw.css';
import '../../css/n/n5p78uvdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kzqqqeyxw"/><path class="n5p78uvdd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sports-medal",
	});
}

export default Component;
