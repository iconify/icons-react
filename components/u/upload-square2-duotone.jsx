import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh9g7lyzs.css';
import '../../css/y/yb41publh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh9g7lyzs"/><path class="yb41publh"/></g>`,
		"fallback": "reicon:upload-square2-duotone",
	});
}

export default Component;
