import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/n1frsfbsd.css';
import '../../css/a/asf-l12yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="n1frsfbsd"/><path class="asf-l12yr"/></g>`,
		"fallback": "hugeicons:network",
	});
}

export default Component;
