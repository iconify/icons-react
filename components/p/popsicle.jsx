import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7q5l_utc.css';
import '../../css/c/c4hj679jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7q5l_utc"/><path class="c4hj679jj"/></g>`,
		"fallback": "andrsrxn:popsicle",
	});
}

export default Component;
