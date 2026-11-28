import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1rskxb0g.css';
import '../../css/w/wn1fpgr7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p1rskxb0g secondary"/><path class="primary wn1fpgr7w"/></g>`,
		"fallback": "iconaut:utensils-duotone",
	});
}

export default Component;
