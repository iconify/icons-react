import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yriv71b6y.css';
import '../../css/m/m4dqn6asq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yriv71b6y"/><path class="m4dqn6asq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:kissing-cat",
	});
}

export default Component;
