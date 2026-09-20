import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0e2rsb6o.css';
import '../../css/x/xxcad1l-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c0e2rsb6o"/><path clip-rule="evenodd" class="xxcad1l-t"/></g>`,
		"fallback": "solar:point-on-map-bold-duotone",
	});
}

export default Component;
