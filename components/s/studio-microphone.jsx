import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-8q7rbdw.css';
import '../../css/f/f9-an_b_h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-8q7rbdw"/><path class="f9-an_b_h"/></g>`,
		"fallback": "fluent-emoji-high-contrast:studio-microphone",
	});
}

export default Component;
