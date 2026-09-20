import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1jn65byr.css';
import '../../css/z/zyfkq2bfx.css';
import '../../css/j/j6gfei9yv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i1jn65byr"/><path clip-rule="evenodd" class="zyfkq2bfx"/><path class="j6gfei9yv"/></g>`,
		"fallback": "pepicons-pencil:lock-closed",
	});
}

export default Component;
