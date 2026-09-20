import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjtq32brs.css';
import '../../css/l/lcmxysb4l.css';
import '../../css/b/bx1scobhd.css';
import '../../css/k/kkx356e5y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vjtq32brs"/><path clip-rule="evenodd" class="lcmxysb4l"/><path clip-rule="evenodd" class="bx1scobhd"/><path clip-rule="evenodd" class="kkx356e5y"/></g>`,
		"fallback": "streamline-flex-color:ios-ipados-flat",
	});
}

export default Component;
