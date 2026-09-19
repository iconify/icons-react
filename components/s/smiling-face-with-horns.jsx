import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz6ababwi.css';
import '../../css/n/npz0vkxfv.css';
import '../../css/o/o1ape7r5o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz6ababwi"/><path class="npz0vkxfv"/><path class="o1ape7r5o"/></g>`,
		"fallback": "fluent-emoji-high-contrast:smiling-face-with-horns",
	});
}

export default Component;
