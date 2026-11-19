import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_ertjd9a.css';
import '../../css/a/a2s_u0b1p.css';
import '../../css/z/zeul4tb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l_ertjd9a"/><path class="a2s_u0b1p"/><path class="zeul4tb0e"/></g>`,
		"fallback": "andrsrxn:resend-all",
	});
}

export default Component;
