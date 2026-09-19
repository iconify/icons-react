import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xfcu0acug.css';
import '../../css/j/jhv688btw.css';
import '../../css/t/t1om97gpo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xfcu0acug"/><path class="jhv688btw"/><path class="t1om97gpo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-technologist",
	});
}

export default Component;
