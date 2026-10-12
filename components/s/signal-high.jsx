import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7o7-jb_x.css';
import '../../css/i/i3fsmmb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7o7-jb_x"/><path class="i3fsmmb1w"/></g>`,
		"fallback": "andrsrxn:signal-high",
	});
}

export default Component;
