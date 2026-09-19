import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u4sxwwy9k.css';
import '../../css/x/xzmgj0blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="u4sxwwy9k"/><path class="xzmgj0blt"/></g>`,
		"fallback": "hugeicons:square-minus",
	});
}

export default Component;
