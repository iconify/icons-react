import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qhw14acgu.css';
import '../../css/l/la6vxbpqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qhw14acgu"/><path class="la6vxbpqy"/></g>`,
		"fallback": "hugeicons:rectangle-ellipsis",
	});
}

export default Component;
