import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngpo85bro.css';
import '../../css/o/oyvi513qp.css';
import '../../css/v/vroonz3_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ngpo85bro"/><path class="oyvi513qp"/><path class="vroonz3_u"/></g>`,
		"fallback": "andrsrxn:refresh-check",
	});
}

export default Component;
