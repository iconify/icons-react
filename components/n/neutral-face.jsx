import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t1o72gj9o.css';
import '../../css/v/v9uf5bcgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t1o72gj9o"/><path class="v9uf5bcgz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:neutral-face",
	});
}

export default Component;
