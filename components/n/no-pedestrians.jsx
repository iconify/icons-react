import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fpyjgebgf.css';
import '../../css/c/cqahp8kse.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fpyjgebgf"/><path class="cqahp8kse"/></g>`,
		"fallback": "fluent-emoji-high-contrast:no-pedestrians",
	});
}

export default Component;
