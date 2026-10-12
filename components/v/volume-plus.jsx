import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prr2mcb8x.css';
import '../../css/h/hiisiicmo.css';
import '../../css/e/erljhab3l.css';
import '../../css/z/z3ls79bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prr2mcb8x"/><path class="hiisiicmo"/><path class="erljhab3l"/><path class="z3ls79bvd"/></g>`,
		"fallback": "andrsrxn:volume-plus",
	});
}

export default Component;
