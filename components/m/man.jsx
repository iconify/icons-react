import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/k59-9kjov.css';
import '../../css/n/nhy_t9f6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="k59-9kjov"/><path class="nhy_t9f6o"/></g>`,
		"fallback": "hugeicons:man",
	});
}

export default Component;
