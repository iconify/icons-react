import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkz3abbwu.css';
import '../../css/k/kt4ks6g-f.css';
import '../../css/u/uiozdbcvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kkz3abbwu"/><path class="kt4ks6g-f"/><path class="uiozdbcvl"/></g>`,
		"fallback": "andrsrxn:resend-square",
	});
}

export default Component;
