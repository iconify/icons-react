import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enzsp1b9i.css';
import '../../css/a/amxj1bcdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="enzsp1b9i"/><path class="amxj1bcdq"/></g>`,
		"fallback": "andrsrxn:square-divide-vertical",
	});
}

export default Component;
