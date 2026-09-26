import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pswcvcb4c.css';
import '../../css/n/n5mi1zbsm.css';
import '../../css/v/vnk6ar40c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pswcvcb4c"/><path class="n5mi1zbsm"/><path clip-rule="evenodd" class="vnk6ar40c"/></g>`,
		"fallback": "solar:rewind-10-seconds-back-bold",
	});
}

export default Component;
