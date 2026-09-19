import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftxgox1wj.css';
import '../../css/r/raliyhh9d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ftxgox1wj"/><path class="raliyhh9d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:llama",
	});
}

export default Component;
