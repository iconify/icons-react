import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbieabzfm.css';
import '../../css/d/d7_1n-bev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gbieabzfm"/><path class="d7_1n-bev"/></g>`,
		"fallback": "reicon:list-duotone",
	});
}

export default Component;
