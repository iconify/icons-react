import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/h/h8d6_0bvz.css';
import '../../css/g/gavebgz5n.css';
import '../../css/d/dh2fsjb0k.css';
import '../../css/e/eeollb8xk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="h8d6_0bvz"/><path class="gavebgz5n"/><path class="dh2fsjb0k"/><path class="eeollb8xk"/></g>`,
		"fallback": "streamline-plump-color:lens",
	});
}

export default Component;
