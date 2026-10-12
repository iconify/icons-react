import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi08lkb8v.css';
import '../../css/u/u4w3whd2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi08lkb8v"/><path class="u4w3whd2n"/></g>`,
		"fallback": "andrsrxn:shield-x",
	});
}

export default Component;
