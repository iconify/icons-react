import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/woosq8bsw.css';
import '../../css/u/umdw3u1ns.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="woosq8bsw"/><circle class="umdw3u1ns"/></g>`,
		"fallback": "system-uicons:record",
	});
}

export default Component;
