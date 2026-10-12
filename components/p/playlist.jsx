import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9m5bpbtk.css';
import '../../css/y/yns1le7gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9m5bpbtk"/><path class="yns1le7gk"/></g>`,
		"fallback": "andrsrxn:playlist",
	});
}

export default Component;
