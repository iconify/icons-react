import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n13l60wwz.css';
import '../../css/w/wo3_s_rkl.css';
import '../../css/h/hn8yplbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n13l60wwz"/><path class="wo3_s_rkl"/><path class="hn8yplbla"/></g>`,
		"fallback": "andrsrxn:paycheck-edit",
	});
}

export default Component;
