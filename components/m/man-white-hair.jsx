import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8m1dxbdz.css';
import '../../css/r/r88klstox.css';
import '../../css/t/t0r3wbkks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8m1dxbdz"/><path class="r88klstox"/><path class="t0r3wbkks"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-white-hair",
	});
}

export default Component;
