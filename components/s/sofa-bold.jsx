import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6jvy1bcp.css';
import '../../css/c/ck9ierbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6jvy1bcp"/><path class="ck9ierbrm"/></g>`,
		"fallback": "solar:sofa-bold",
	});
}

export default Component;
