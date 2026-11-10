import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at2hwbuuf.css';
import '../../css/m/m6h9c_b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="at2hwbuuf"/><path class="m6h9c_b_v"/></g>`,
		"fallback": "andrsrxn:suitcase",
	});
}

export default Component;
