import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z919gfbeb.css';
import '../../css/v/v6nw61bce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z919gfbeb"/><path class="v6nw61bce"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mobile-phone",
	});
}

export default Component;
