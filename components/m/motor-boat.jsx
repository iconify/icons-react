import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cp6--kfjv.css';
import '../../css/s/sd-3kx49e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cp6--kfjv"/><path class="sd-3kx49e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:motor-boat",
	});
}

export default Component;
