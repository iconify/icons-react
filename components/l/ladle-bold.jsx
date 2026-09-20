import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a409i6bsu.css';
import '../../css/n/naljg539h.css';
import '../../css/j/jytd4wl2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a409i6bsu"/><path class="naljg539h"/><path class="jytd4wl2c"/></g>`,
		"fallback": "solar:ladle-bold",
	});
}

export default Component;
