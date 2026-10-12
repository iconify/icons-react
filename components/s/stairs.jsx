import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqzauib6f.css';
import '../../css/r/rqkderbfe.css';
import '../../css/i/i8r3pbcwv.css';
import '../../css/e/e1mp8kbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqzauib6f"/><path class="rqkderbfe"/><path class="i8r3pbcwv"/><path class="e1mp8kbsg"/></g>`,
		"fallback": "andrsrxn:stairs",
	});
}

export default Component;
