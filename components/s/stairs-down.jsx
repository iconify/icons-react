import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxzqilbak.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/l/l6mr1ibtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uxzqilbak"/><path class="c_9t11wpq"/><path class="l6mr1ibtu"/></g>`,
		"fallback": "andrsrxn:stairs-down",
	});
}

export default Component;
