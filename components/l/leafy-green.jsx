import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gko_7xb1b.css';
import '../../css/c/c1k-kccca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gko_7xb1b"/><path class="c1k-kccca"/></g>`,
		"fallback": "fluent-emoji-high-contrast:leafy-green",
	});
}

export default Component;
