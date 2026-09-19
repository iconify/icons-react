import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/ji3ucpboe.css';
import '../../css/p/pxh7g85pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ji3ucpboe"/><path class="pxh7g85pl"/></g>`,
		"fallback": "hugeicons:shipping-center",
	});
}

export default Component;
