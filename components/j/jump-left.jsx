import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/v/v95pm0brk.css';
import '../../css/o/odugvzbbi.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="v95pm0brk"/><path class="odugvzbbi"/></g>`,
		"fallback": "system-uicons:jump-left",
	});
}

export default Component;
