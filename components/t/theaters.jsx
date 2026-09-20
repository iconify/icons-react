import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1y3-_b_c.css';
import '../../css/h/hjbj_vbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1y3-_b_c"/><path class="hjbj_vbhz"/></g>`,
		"fallback": "tdesign:theaters",
	});
}

export default Component;
