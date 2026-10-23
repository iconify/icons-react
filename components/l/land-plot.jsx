import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/polqfrbcx.css';
import '../../css/w/wsfw4vbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="polqfrbcx"/><path class="wsfw4vbcn"/></g>`,
		"fallback": "andrsrxn:land-plot",
	});
}

export default Component;
