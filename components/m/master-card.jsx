import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/in0jghbyd.css';
import '../../css/a/ardd_2b9b.css';
import '../../css/y/ya7jsccar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="in0jghbyd"/><path class="ardd_2b9b"/><path class="ya7jsccar"/></g>`,
		"fallback": "hugeicons:master-card",
	});
}

export default Component;
