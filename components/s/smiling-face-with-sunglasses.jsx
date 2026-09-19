import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ovypwcd6f.css';
import '../../css/o/oj2tikbve.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ovypwcd6f"/><path class="oj2tikbve"/></g>`,
		"fallback": "fluent-emoji-high-contrast:smiling-face-with-sunglasses",
	});
}

export default Component;
