import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn2ogq_7k.css';
import '../../css/j/jetryje3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pn2ogq_7k"/><path class="jetryje3u"/></g>`,
		"fallback": "mingcute:radar-fill",
	});
}

export default Component;
