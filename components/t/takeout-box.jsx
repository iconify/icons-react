import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g0-5i-b1b.css';
import '../../css/v/vk7vg5bcj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g0-5i-b1b"/><path class="vk7vg5bcj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:takeout-box",
	});
}

export default Component;
