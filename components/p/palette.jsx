import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p3xpfwbqf.css';
import '../../css/k/kxczbok0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path clip-rule="evenodd" class="p3xpfwbqf"/><path class="kxczbok0i"/></g>`,
		"fallback": "hugeicons:palette",
	});
}

export default Component;
