import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kvrua1bbb.css';
import '../../css/c/c6t0yhbpz.css';
import '../../css/u/usfe9xhoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kvrua1bbb"/><path class="c6t0yhbpz"/><path class="usfe9xhoc"/></g>`,
		"fallback": "hugeicons:notification-snooze-02",
	});
}

export default Component;
