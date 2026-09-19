import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/huqiz82ws.css';
import '../../css/i/iox6mb34c.css';
import '../../css/j/jlj7bz0gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="huqiz82ws"/><path class="iox6mb34c"/><path class="jlj7bz0gp"/></g>`,
		"fallback": "hugeicons:sun-cloud-little-rain-01",
	});
}

export default Component;
