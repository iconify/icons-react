import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3kpjqbfy.css';
import '../../css/t/tgug5f0tr.css';
import '../../css/w/wmhvhjlfj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g3kpjqbfy"/><path class="tgug5f0tr"/><path class="wmhvhjlfj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-congratulations-button",
	});
}

export default Component;
