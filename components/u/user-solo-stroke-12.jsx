import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wg4wfrbba.css';
import '../../css/c/c_8zr8hod.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="wg4wfrbba"/><path class="c_8zr8hod"/></g>`,
		"fallback": "garden:user-solo-stroke-12",
	});
}

export default Component;
