import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lz5kq01wk.css';
import '../../css/w/wdki6fxhv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lz5kq01wk"/><path class="wdki6fxhv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ship",
	});
}

export default Component;
