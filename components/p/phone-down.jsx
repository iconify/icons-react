import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlz-pnb7j.css';
import '../../css/g/gc5141bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlz-pnb7j"/><path class="gc5141bik"/></g>`,
		"fallback": "andrsrxn:phone-down",
	});
}

export default Component;
