import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y1dfv4b9x.css';
import '../../css/e/ecz7iwc3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y1dfv4b9x"/><path class="ecz7iwc3y"/></g>`,
		"fallback": "solar:magic-wand-bold-duotone",
	});
}

export default Component;
