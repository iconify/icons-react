import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5378jb8g.css';
import '../../css/t/t5e-jpbiy.css';
import '../../css/w/wmhvhjlfj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y5378jb8g"/><path class="t5e-jpbiy"/><path class="wmhvhjlfj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-secret-button",
	});
}

export default Component;
