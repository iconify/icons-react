import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idlcwyd3j.css';
import '../../css/j/j-rk1piic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="idlcwyd3j"/><path class="j-rk1piic"/></g>`,
		"fallback": "cryptocurrency-color:sumo",
	});
}

export default Component;
