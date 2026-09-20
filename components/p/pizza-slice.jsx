import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6zn6abhh.css';
import '../../css/q/q_f8gu14x.css';
import '../../css/g/gcioct8bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e6zn6abhh"/><path class="q_f8gu14x"/><path class="gcioct8bz"/></g>`,
		"fallback": "reicon:pizza-slice",
	});
}

export default Component;
