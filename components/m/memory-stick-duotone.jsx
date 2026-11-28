import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3dxz6bkw.css';
import '../../css/n/n706yrbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w3dxz6bkw"/><path class="n706yrbtk primary"/></g>`,
		"fallback": "iconaut:memory-stick-duotone",
	});
}

export default Component;
