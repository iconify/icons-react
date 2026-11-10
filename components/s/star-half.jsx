import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swvw65ucs.css';
import '../../css/f/fcz9s4s4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swvw65ucs"/><path class="fcz9s4s4d"/></g>`,
		"fallback": "andrsrxn:star-half",
	});
}

export default Component;
