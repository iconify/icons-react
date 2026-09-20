import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dv1syxqhf.css';
import '../../css/v/vh9g7lyzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dv1syxqhf"/><path class="vh9g7lyzs"/></g>`,
		"fallback": "reicon:text-square2-duotone",
	});
}

export default Component;
