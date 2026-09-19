import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/r_sjgjb-k.css';
import '../../css/q/qwq8osbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="r_sjgjb-k"/><path class="qwq8osbyx"/></g>`,
		"fallback": "hugeicons:sidebar-left-01",
	});
}

export default Component;
