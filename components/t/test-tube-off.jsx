import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5h19xbhu.css';
import '../../css/e/ekw6y0wbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w5h19xbhu"/><path class="ekw6y0wbb"/></g>`,
		"fallback": "andrsrxn:test-tube-off",
	});
}

export default Component;
