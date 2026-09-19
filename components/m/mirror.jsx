import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-67kobqx.css';
import '../../css/h/h2my7abig.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-67kobqx"/><path class="h2my7abig"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mirror",
	});
}

export default Component;
