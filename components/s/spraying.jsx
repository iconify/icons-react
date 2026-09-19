import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/przz147oy.css';
import '../../css/b/b20r58zph.css';
import '../../css/g/gzee60hjc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="przz147oy"/><path class="b20r58zph"/><path class="gzee60hjc"/></g>`,
		"fallback": "healthicons:spraying",
	});
}

export default Component;
