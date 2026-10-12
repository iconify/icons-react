import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb9m1rbgm.css';
import '../../css/d/dld8cub2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tb9m1rbgm"/><path class="dld8cub2c"/></g>`,
		"fallback": "andrsrxn:sun-up",
	});
}

export default Component;
