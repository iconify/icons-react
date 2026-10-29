import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/trd2dq30t.css';
import '../../css/q/qf5kqpo9g.css';
import '../../css/e/ee_t7pb7v.css';
import '../../css/f/fiarxjb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="trd2dq30t wm-k"/><path class="qf5kqpo9g wm-shadow"/><path class="ee_t7pb7v wm-k"/><path class="fiarxjb9d wm-a"/></g>`,
		"fallback": "withicons:message-square-plus-engrave",
	});
}

export default Component;
