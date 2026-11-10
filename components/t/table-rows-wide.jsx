import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/naez5q_xd.css';
import '../../css/o/o2j5e1b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="naez5q_xd"/><path class="o2j5e1b_m"/></g>`,
		"fallback": "andrsrxn:table-rows-wide",
	});
}

export default Component;
