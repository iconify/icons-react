import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/in9-i15aj.css';
import '../../css/k/kjsvfybrp.css';
import '../../css/q/q11o5ac5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="in9-i15aj"/><path class="kjsvfybrp"/><path class="q11o5ac5x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-elf",
	});
}

export default Component;
