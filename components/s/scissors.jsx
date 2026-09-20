import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/goqz8tb3v.css';
import '../../css/j/jvg3zkbua.css';
import '../../css/q/qncjnqb9b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="goqz8tb3v"/><path class="jvg3zkbua"/><path class="qncjnqb9b"/></g>`,
		"fallback": "pepicons-pencil:scissors",
	});
}

export default Component;
