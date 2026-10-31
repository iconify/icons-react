import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y_yc9pjvn.css';
import '../../css/i/iod2rc--u.css';
import '../../css/r/ru_m_q-rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y_yc9pjvn"/><path class="iod2rc--u wm-shadow"/><path class="ru_m_q-rd"/></g>`,
		"fallback": "withicons-brutal:timer-reset",
	});
}

export default Component;
