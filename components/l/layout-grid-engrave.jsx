import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/harvsacrb.css';
import '../../css/y/yyu52cbqp.css';
import '../../css/b/bqfneeboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="harvsacrb"/><path class="wm-shadow yyu52cbqp"/><path class="bqfneeboe"/></g>`,
		"fallback": "withicons:layout-grid-engrave",
	});
}

export default Component;
