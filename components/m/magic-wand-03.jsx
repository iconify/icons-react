import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xxftuhv7v.css';
import '../../css/i/iv91gxb2w.css';
import '../../css/t/t9behylkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xxftuhv7v"/><path class="iv91gxb2w"/><path class="t9behylkp"/></g>`,
		"fallback": "hugeicons:magic-wand-03",
	});
}

export default Component;
