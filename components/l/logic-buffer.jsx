import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m60bxpb6v.css';
import '../../css/p/pju-0_bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m60bxpb6v"/><path class="pju-0_bdv"/></g>`,
		"fallback": "andrsrxn:logic-buffer",
	});
}

export default Component;
