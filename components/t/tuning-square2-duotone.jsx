import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh9g7lyzs.css';
import '../../css/p/piyg4wbsp.css';
import '../../css/y/y8mxf7b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh9g7lyzs"/><path class="piyg4wbsp"/><path clip-rule="evenodd" class="y8mxf7b5z"/></g>`,
		"fallback": "reicon:tuning-square2-duotone",
	});
}

export default Component;
