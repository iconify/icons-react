import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/t/t4s6mac-y.css';
import '../../css/w/w8gxl9-7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="t4s6mac-y"/><path class="w8gxl9-7q"/></g>`,
		"fallback": "icon-park-outline:plastic-surgery",
	});
}

export default Component;
