import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xq7yvcc_w.css';
import '../../css/q/q_q2ilbht.css';
import '../../css/y/ynsukob-u.css';
import '../../css/o/onsuoeb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xq7yvcc_w"/><circle class="q_q2ilbht"/><path class="ynsukob-u"/><path class="onsuoeb3v"/></g>`,
		"fallback": "andrsrxn:refresh-off",
	});
}

export default Component;
