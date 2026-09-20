import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/q/qc7ezwbyq.css';
import '../../css/j/j9twswbny.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="qc7ezwbyq"/><path class="j9twswbny"/></g>`,
		"fallback": "system-uicons:mail-add",
	});
}

export default Component;
