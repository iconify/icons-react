import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qz7j31bti.css';
import '../../css/i/ibo-jhcqp.css';
import '../../css/d/dr_exnh7z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qz7j31bti"/><path clip-rule="evenodd" class="ibo-jhcqp"/><path class="dr_exnh7z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:train",
	});
}

export default Component;
