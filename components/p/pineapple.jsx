import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1f0q-3kj.css';
import '../../css/b/bk0vetmta.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1f0q-3kj"/><path class="bk0vetmta"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pineapple",
	});
}

export default Component;
