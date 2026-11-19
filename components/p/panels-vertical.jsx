import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-5gg16_t.css';
import '../../css/p/pnmbuobzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-5gg16_t"/><path class="pnmbuobzt"/></g>`,
		"fallback": "andrsrxn:panels-vertical",
	});
}

export default Component;
