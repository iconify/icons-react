import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehtfnybyr.css';
import '../../css/u/u6ejs6bji.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehtfnybyr"/><path class="u6ejs6bji"/></g>`,
		"fallback": "fluent-emoji-high-contrast:unlocked",
	});
}

export default Component;
