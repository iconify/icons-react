import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gl3_0s1xy.css';
import '../../css/o/o8a2ao5ce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gl3_0s1xy"/><path class="o8a2ao5ce"/></g>`,
		"fallback": "fluent-emoji-high-contrast:non-potable-water",
	});
}

export default Component;
