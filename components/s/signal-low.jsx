import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhq6adb3p.css';
import '../../css/w/w3dfg4y2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qhq6adb3p"/><path class="w3dfg4y2c"/></g>`,
		"fallback": "andrsrxn:signal-low",
	});
}

export default Component;
