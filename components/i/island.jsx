import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9l253_we.css';
import '../../css/u/umr2qyj5j.css';
import '../../css/r/rqs9kbzdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d9l253_we"/><path class="umr2qyj5j"/><path class="rqs9kbzdd"/></g>`,
		"fallback": "andrsrxn:island",
	});
}

export default Component;
