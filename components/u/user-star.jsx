import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmr0x_b2r.css';
import '../../css/i/i_hbnmb4b.css';
import '../../css/t/t07-p-bjr.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmr0x_b2r"/><path class="i_hbnmb4b"/><path class="t07-p-bjr"/><path class="x9g6iubus"/></g>`,
		"fallback": "andrsrxn:user-star",
	});
}

export default Component;
