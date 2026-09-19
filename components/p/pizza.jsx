import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj3ok_l0p.css';
import '../../css/i/iw6m7bcie.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nj3ok_l0p"/><path class="iw6m7bcie"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pizza",
	});
}

export default Component;
