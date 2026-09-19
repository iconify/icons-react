import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9snyewvf.css';
import '../../css/d/dcn7t4fls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d9snyewvf"/><path clip-rule="evenodd" class="dcn7t4fls"/></g>`,
		"fallback": "gg:thermometer",
	});
}

export default Component;
