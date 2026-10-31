import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pv8awib7j.css';
import '../../css/u/uqnonybvp.css';
import '../../css/j/ju0d_1b9e.css';
import '../../css/q/qn3wh-btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pv8awib7j wm-shadow"/><path class="uqnonybvp wm-shadow"/><path class="ju0d_1b9e"/><path class="qn3wh-btn"/></g>`,
		"fallback": "withicons-brutal:sleigh",
	});
}

export default Component;
