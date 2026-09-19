import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rttu3wbcx.css';
import '../../css/o/os6-oj5lh.css';
import '../../css/i/irg7-9mxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rttu3wbcx"/><path class="os6-oj5lh"/><path class="irg7-9mxx"/></g>`,
		"fallback": "hugeicons:mail-lock-01",
	});
}

export default Component;
