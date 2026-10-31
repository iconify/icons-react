import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nmft12bys.css';
import '../../css/x/xnc7029rb.css';
import '../../css/s/stgk1sbdc.css';
import '../../css/k/k5th1ruec.css';
import '../../css/t/tg_gdp16g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nmft12bys wm-shadow"/><path class="wm-shadow xnc7029rb"/><path class="stgk1sbdc"/><path class="k5th1ruec"/><path class="tg_gdp16g"/></g>`,
		"fallback": "withicons-brutal:pause",
	});
}

export default Component;
