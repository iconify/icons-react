import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7aurab0i.css';
import '../../css/d/dhip0ibop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7aurab0i"/><path class="dhip0ibop"/></g>`,
		"fallback": "reicon:map-arrow-left-duotone",
	});
}

export default Component;
