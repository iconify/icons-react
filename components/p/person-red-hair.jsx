import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thnxioxsb.css';
import '../../css/j/jsjezmbcj.css';
import '../../css/j/juu6wob2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="thnxioxsb"/><path class="jsjezmbcj"/><path class="juu6wob2l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-red-hair",
	});
}

export default Component;
