import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/h/h84eq5xdd.css';
import '../../css/w/wr0z25bcm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="h84eq5xdd"/><path class="wr0z25bcm"/></g>`,
		"fallback": "system-uicons:scale",
	});
}

export default Component;
