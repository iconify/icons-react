import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5kp7b5pf.css';
import '../../css/f/fi7t-7b3m.css';
import '../../css/q/qfwv274_r.css';
import '../../css/h/hw8ioqbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5kp7b5pf"/><path clip-rule="evenodd" class="fi7t-7b3m"/><path class="qfwv274_r"/><path class="hw8ioqbjk"/></g>`,
		"fallback": "andrsrxn:refresh-sparkle",
	});
}

export default Component;
