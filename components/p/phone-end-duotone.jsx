import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8yyaib0v.css';
import '../../css/r/rte-4k3hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y8yyaib0v"/><path class="rte-4k3hy"/></g>`,
		"fallback": "reicon:phone-end-duotone",
	});
}

export default Component;
