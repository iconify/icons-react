import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_x_9py4c.css';
import '../../css/f/fcpg31afm.css';
import '../../css/l/lx95c5pyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="o_x_9py4c"/><path class="fcpg31afm"/><path class="lx95c5pyb"/></g>`,
		"fallback": "icon-park-outline:medicine-chest",
	});
}

export default Component;
