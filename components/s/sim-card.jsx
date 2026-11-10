import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0qbhmb0w.css';
import '../../css/y/ydy8hr9lg.css';
import '../../css/t/tc8n0wb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t0qbhmb0w"/><path class="ydy8hr9lg"/><path class="tc8n0wb5g"/></g>`,
		"fallback": "andrsrxn:sim-card",
	});
}

export default Component;
