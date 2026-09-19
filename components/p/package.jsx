import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfk-z4bln.css';
import '../../css/f/fqtzapo4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sfk-z4bln"/><path class="fqtzapo4t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:package",
	});
}

export default Component;
