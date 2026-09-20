import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1-gd6bxu.css';
import '../../css/t/tncjfdbwu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a1-gd6bxu"/><path class="tncjfdbwu"/></g>`,
		"fallback": "streamline-color:tree-3-flat",
	});
}

export default Component;
