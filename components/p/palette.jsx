import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mut7a7boq.css';
import '../../css/l/ly03zhb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mut7a7boq"/><path class="ly03zhb3y"/></g>`,
		"fallback": "iconoir:palette",
	});
}

export default Component;
