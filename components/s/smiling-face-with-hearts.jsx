import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ag3ney7xj.css';
import '../../css/w/wu3mg0bms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ag3ney7xj"/><path class="wu3mg0bms"/></g>`,
		"fallback": "fluent-emoji-high-contrast:smiling-face-with-hearts",
	});
}

export default Component;
