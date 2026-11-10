import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlz-pnb7j.css';
import '../../css/s/suckygb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlz-pnb7j"/><path class="suckygb1q"/></g>`,
		"fallback": "andrsrxn:phone-off",
	});
}

export default Component;
