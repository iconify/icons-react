import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc0ak2buq.css';
import '../../css/h/h27vhbcct.css';
import '../../css/r/rx_4_u73t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pc0ak2buq"/><circle class="h27vhbcct"/><path class="rx_4_u73t"/></g>`,
		"fallback": "andrsrxn:token",
	});
}

export default Component;
