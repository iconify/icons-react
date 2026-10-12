import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0ae0ac6f.css';
import '../../css/d/du-lxhbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0ae0ac6f"/><path class="du-lxhbsv"/></g>`,
		"fallback": "andrsrxn:share",
	});
}

export default Component;
