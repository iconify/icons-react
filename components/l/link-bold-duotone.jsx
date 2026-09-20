import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8e8sacue.css';
import '../../css/x/xf5lltbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d8e8sacue"/><path class="xf5lltbab"/></g>`,
		"fallback": "solar:link-bold-duotone",
	});
}

export default Component;
