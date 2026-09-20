import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ec9y-vbgq.css';
import '../../css/q/qxzl8mbit.css';
import '../../css/v/vcav8zb4u.css';
import '../../css/z/zkmoqc5yr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ec9y-vbgq"/><path class="qxzl8mbit"/><path clip-rule="evenodd" class="vcav8zb4u"/><path clip-rule="evenodd" class="zkmoqc5yr"/></g>`,
		"fallback": "pepicons-print:smartphone",
	});
}

export default Component;
