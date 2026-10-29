import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/juo2ho41m.css';
import '../../css/y/y-wgo2cte.css';
import '../../css/q/q1b0w0zoz.css';
import '../../css/l/lxqkkqmys.css';
import '../../css/t/td49gbbjb.css';
import '../../css/j/j314kuthn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="juo2ho41m wm-k"/><path class="wm-a y-wgo2cte"/><path class="q1b0w0zoz wm-shadow"/><path class="lxqkkqmys wm-k"/><path class="td49gbbjb wm-k"/><path class="j314kuthn wm-a"/></g>`,
		"fallback": "withicons:rose-engrave",
	});
}

export default Component;
