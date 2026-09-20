import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_p92fbyh.css';
import '../../css/w/w3y4vvb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_p92fbyh"/><path class="w3y4vvb1v"/></g>`,
		"fallback": "tdesign:system-locked",
	});
}

export default Component;
