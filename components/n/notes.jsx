import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iv4uekbhm.css';
import '../../css/j/j86hesz-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iv4uekbhm"/><path class="j86hesz-i"/></g>`,
		"fallback": "andrsrxn:notes",
	});
}

export default Component;
