import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iuykpyg5m.css';
import '../../css/u/u4sxwwy9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="iuykpyg5m"/><path class="u4sxwwy9k"/></g>`,
		"fallback": "hugeicons:square-dot",
	});
}

export default Component;
