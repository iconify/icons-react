import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s036aybic.css';
import '../../css/c/c5xvfxbbr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s036aybic"/><path class="c5xvfxbbr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mouse",
	});
}

export default Component;
