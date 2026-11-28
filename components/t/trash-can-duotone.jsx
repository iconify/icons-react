import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ker-7l14b.css';
import '../../css/c/cy91o3qwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ker-7l14b secondary"/><path class="cy91o3qwu primary"/></g>`,
		"fallback": "iconaut:trash-can-duotone",
	});
}

export default Component;
