import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kok2d6b3s.css';
import '../../css/v/veqr55bio.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kok2d6b3s"/><path class="veqr55bio"/></g>`,
		"fallback": "fluent-emoji-high-contrast:lion",
	});
}

export default Component;
