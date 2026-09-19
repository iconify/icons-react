import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-zbmcbhg.css';
import '../../css/b/bgcgupbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l-zbmcbhg"/><path class="bgcgupbiz"/></g>`,
		"fallback": "healthicons:intestine-outline-24px",
	});
}

export default Component;
