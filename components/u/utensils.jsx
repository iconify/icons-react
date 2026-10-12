import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjx0i0nuk.css';
import '../../css/s/sppc9mbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjx0i0nuk"/><path class="sppc9mbmm"/></g>`,
		"fallback": "andrsrxn:utensils",
	});
}

export default Component;
