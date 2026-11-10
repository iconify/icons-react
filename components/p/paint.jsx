import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihge4zk3f.css';
import '../../css/r/rwg1ksb6d.css';
import '../../css/k/knx8xhbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ihge4zk3f"/><path class="rwg1ksb6d"/><path class="knx8xhbeu"/></g>`,
		"fallback": "andrsrxn:paint",
	});
}

export default Component;
