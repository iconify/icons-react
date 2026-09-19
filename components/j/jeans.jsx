import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1_1f-bnt.css';
import '../../css/r/rr8tfmpjh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1_1f-bnt"/><path class="rr8tfmpjh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:jeans",
	});
}

export default Component;
