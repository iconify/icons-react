import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_3vrub-c.css';
import '../../css/g/g-u-x-bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_3vrub-c"/><path class="g-u-x-bka"/></g>`,
		"fallback": "andrsrxn:sailboat",
	});
}

export default Component;
