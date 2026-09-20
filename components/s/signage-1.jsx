import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2miu4bln.css';
import '../../css/d/d6z3pebip.css';
import '../../css/q/quy4umbni.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2miu4bln"/><path class="d6z3pebip"/><path class="quy4umbni"/></g>`,
		"fallback": "streamline-flex-color:signage-1",
	});
}

export default Component;
