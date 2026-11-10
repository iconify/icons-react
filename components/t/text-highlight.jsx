import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4s385box.css';
import '../../css/g/g4yiozu5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4s385box"/><path class="g4yiozu5z"/></g>`,
		"fallback": "andrsrxn:text-highlight",
	});
}

export default Component;
