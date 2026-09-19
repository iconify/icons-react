import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_zd_zbxr.css';
import '../../css/l/l-a6uibsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x_zd_zbxr"/><path class="l-a6uibsq"/></g>`,
		"fallback": "gg:ui-kit",
	});
}

export default Component;
