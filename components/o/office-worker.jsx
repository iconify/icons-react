import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb4bfebvb.css';
import '../../css/l/lyws1_bjd.css';
import '../../css/u/u0z0to29k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rb4bfebvb"/><path class="lyws1_bjd"/><path class="u0z0to29k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:office-worker",
	});
}

export default Component;
