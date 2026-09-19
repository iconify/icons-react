import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njd1q-rms.css';
import '../../css/o/ox-ob9bai.css';
import '../../css/q/q09x-sbzr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="njd1q-rms"/><path class="ox-ob9bai"/><path class="q09x-sbzr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:money-mouth-face",
	});
}

export default Component;
