import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh3l58bvy.css';
import '../../css/q/q7szbjbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gh3l58bvy"/><path class="q7szbjbod"/></g>`,
		"fallback": "andrsrxn:signal-status-high",
	});
}

export default Component;
