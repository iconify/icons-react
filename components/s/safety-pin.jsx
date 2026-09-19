import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0pxrlo7v.css';
import '../../css/d/dotg7kbpn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0pxrlo7v"/><path class="dotg7kbpn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:safety-pin",
	});
}

export default Component;
