import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wo03t_npi.css';
import '../../css/o/ozwb22glz.css';
import '../../css/w/wjf1ikbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wo03t_npi"/><path class="ozwb22glz wm-shadow"/><path class="wjf1ikbgx"/></g>`,
		"fallback": "withicons:tooth-engrave",
	});
}

export default Component;
