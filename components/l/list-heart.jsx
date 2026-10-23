import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le773oq_x.css';
import '../../css/x/x164nenhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="le773oq_x"/><path class="x164nenhl"/></g>`,
		"fallback": "andrsrxn:list-heart",
	});
}

export default Component;
