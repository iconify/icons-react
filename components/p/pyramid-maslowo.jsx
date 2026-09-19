import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xqklry6dp.css';
import '../../css/i/im0erbc2j.css';
import '../../css/a/az1hpy9gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="xqklry6dp"/><path class="im0erbc2j"/><path class="az1hpy9gr"/></g>`,
		"fallback": "hugeicons:pyramid-maslowo",
	});
}

export default Component;
