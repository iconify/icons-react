import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6wql-qlj.css';
import '../../css/b/bxgw45x3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6wql-qlj secondary"/><path class="bxgw45x3z primary"/></g>`,
		"fallback": "iconaut:sheep-duotone",
	});
}

export default Component;
