import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pj0ztvd3k.css';
import '../../css/r/rhn_knbrj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pj0ztvd3k"/><path class="rhn_knbrj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:television",
	});
}

export default Component;
