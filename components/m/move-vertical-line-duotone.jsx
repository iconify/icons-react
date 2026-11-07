import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jp1ilnbst.css';
import '../../css/x/x07ftrzei.css';
import '../../css/w/w4qe5y36z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jp1ilnbst"/><path class="x07ftrzei"/><path class="w4qe5y36z"/></g>`,
		"fallback": "solar:move-vertical-line-duotone",
	});
}

export default Component;
