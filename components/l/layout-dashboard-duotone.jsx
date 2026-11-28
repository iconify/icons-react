import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydkb8tluk.css';
import '../../css/j/jkd5n-bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ydkb8tluk"/><path class="jkd5n-bgo primary"/></g>`,
		"fallback": "iconaut:layout-dashboard-duotone",
	});
}

export default Component;
