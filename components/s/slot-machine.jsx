import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj4mq8b-t.css';
import '../../css/z/z1kz1ybjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj4mq8b-t"/><path class="z1kz1ybjo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:slot-machine",
	});
}

export default Component;
