import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqgwkcrck.css';
import '../../css/m/m6igm-b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rqgwkcrck"/><path class="m6igm-b-x"/></g>`,
		"fallback": "iconamoon:number-9-duotone",
	});
}

export default Component;
