import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cxbg8gruc.css';
import '../../css/g/gb_1nlvhf.css';
import '../../css/u/uc7yrbuem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cxbg8gruc"/><path class="gb_1nlvhf"/><path class="uc7yrbuem"/></g>`,
		"fallback": "andrsrxn:refresh-notification",
	});
}

export default Component;
