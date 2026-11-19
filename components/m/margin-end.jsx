import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr7b7yytv.css';
import '../../css/c/c9labf5kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rr7b7yytv"/><path class="c9labf5kf"/></g>`,
		"fallback": "andrsrxn:margin-end",
	});
}

export default Component;
