import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/insp9bc5h.css';
import '../../css/q/q046f3fwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="insp9bc5h"/><path class="q046f3fwe"/></g>`,
		"fallback": "andrsrxn:panels-right",
	});
}

export default Component;
