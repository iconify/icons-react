import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/um8lvbcbw.css';
import '../../css/y/yp8iluy6t.css';
import '../../css/d/dv36xwbcf.css';
import '../../css/x/xvfqsbcod.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="um8lvbcbw"/><path class="yp8iluy6t"/><path class="dv36xwbcf"/><path class="xvfqsbcod"/></g>`,
		"fallback": "streamline-color:pharmacy",
	});
}

export default Component;
