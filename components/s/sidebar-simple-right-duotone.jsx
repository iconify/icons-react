import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp43jgblw.css';
import '../../css/x/x_2l1bbaq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wp43jgblw"/><path class="x_2l1bbaq"/></g>`,
		"fallback": "pullo:sidebar-simple-right-duotone",
	});
}

export default Component;
