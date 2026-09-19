import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ph3sttbqm.css';
import '../../css/v/vqbwb0xul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ph3sttbqm"/><path class="vqbwb0xul"/></g>`,
		"fallback": "fluent-emoji-high-contrast:nest-with-eggs",
	});
}

export default Component;
