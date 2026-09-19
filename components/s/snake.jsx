import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5hy06g8a.css';
import '../../css/n/nx9zdebuu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5hy06g8a"/><path class="nx9zdebuu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:snake",
	});
}

export default Component;
