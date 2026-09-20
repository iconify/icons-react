import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/yrbdrvajt.css';
import '../../css/e/exuvvh5fb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="yrbdrvajt"/><path class="exuvvh5fb"/></g>`,
		"fallback": "system-uicons:undo",
	});
}

export default Component;
