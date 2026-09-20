import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb1lw53aw.css';
import '../../css/l/li07089kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rb1lw53aw"/><path class="li07089kc"/></g>`,
		"fallback": "reicon:refresh-duotone",
	});
}

export default Component;
