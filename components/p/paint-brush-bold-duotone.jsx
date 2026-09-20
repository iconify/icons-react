import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5yunz3xz.css';
import '../../css/j/jst2__b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5yunz3xz"/><path class="jst2__b-e"/></g>`,
		"fallback": "solar:paint-brush-bold-duotone",
	});
}

export default Component;
