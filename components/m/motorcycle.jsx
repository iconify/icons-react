import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lsi9_rb6t.css';
import '../../css/n/nu7q2clxj.css';
import '../../css/q/qguy_lbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lsi9_rb6t wm-shadow"/><path class="nu7q2clxj wm-shadow"/><path class="qguy_lbsj"/></g>`,
		"fallback": "withicons-brutal:motorcycle",
	});
}

export default Component;
