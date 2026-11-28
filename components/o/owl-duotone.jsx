import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sacpmtbaj.css';
import '../../css/f/frtog25ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sacpmtbaj secondary"/><path class="frtog25ab primary"/></g>`,
		"fallback": "iconaut:owl-duotone",
	});
}

export default Component;
