import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_z8dvb4u.css';
import '../../css/w/w6pv-ohjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_z8dvb4u"/><path clip-rule="evenodd" class="w6pv-ohjx"/></g>`,
		"fallback": "nrk:tv-expressive",
	});
}

export default Component;
