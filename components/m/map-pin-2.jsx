import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nf36psyjd.css';
import '../../css/j/jne71jnre.css';
import '../../css/n/nhh2o_iiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nf36psyjd"/><path class="jne71jnre"/><path class="nhh2o_iiy"/></g>`,
		"fallback": "iconaut:map-pin-2",
	});
}

export default Component;
