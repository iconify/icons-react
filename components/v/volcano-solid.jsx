import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y92mmob4k.css';
import '../../css/x/xsdb7ebva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y92mmob4k"/><path class="xsdb7ebva"/></g>`,
		"fallback": "iconaut:volcano-solid",
	});
}

export default Component;
