import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/iixc72byc.css';
import '../../css/k/kzhs7u93y.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="iixc72byc"/><path class="kzhs7u93y"/></g>`,
		"fallback": "system-uicons:user-add",
	});
}

export default Component;
