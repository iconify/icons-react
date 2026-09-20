import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yizq5jb-e.css';
import '../../css/p/p11hv-buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yizq5jb-e"/><path clip-rule="evenodd" class="p11hv-buv"/></g>`,
		"fallback": "nrk:person-expressive",
	});
}

export default Component;
