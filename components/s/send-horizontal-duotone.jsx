import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wis5wp3-e.css';
import '../../css/b/bdkcjsb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wis5wp3-e"/><path class="bdkcjsb7u primary"/></g>`,
		"fallback": "iconaut:send-horizontal-duotone",
	});
}

export default Component;
