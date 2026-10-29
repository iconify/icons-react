import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tmqec3_yf.css';
import '../../css/q/qf5kqpo9g.css';
import '../../css/e/ee_t7pb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tmqec3_yf"/><path class="qf5kqpo9g wm-shadow"/><path class="ee_t7pb7v"/></g>`,
		"fallback": "withicons:message-square-engrave",
	});
}

export default Component;
