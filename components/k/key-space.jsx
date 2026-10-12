import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgujtxbts.css';
import '../../css/a/aj9d56bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qgujtxbts"/><path class="aj9d56bqg"/></g>`,
		"fallback": "andrsrxn:key-space",
	});
}

export default Component;
