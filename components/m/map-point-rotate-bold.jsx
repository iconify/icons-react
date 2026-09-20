import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b60eo5bxw.css';
import '../../css/i/i_hca-bhh.css';
import '../../css/f/fno7as3wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b60eo5bxw"/><path class="i_hca-bhh"/><path clip-rule="evenodd" class="fno7as3wa"/></g>`,
		"fallback": "solar:map-point-rotate-bold",
	});
}

export default Component;
