import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z5bot9bbn.css';
import '../../css/k/k3ff_2brr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z5bot9bbn"/><path class="k3ff_2brr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-guard",
	});
}

export default Component;
