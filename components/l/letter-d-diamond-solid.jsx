import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xmgry2bce.css';
import '../../css/b/bxc1hdczs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xmgry2bce"/><path class="bxc1hdczs"/></g>`,
		"fallback": "mynaui:letter-d-diamond-solid",
	});
}

export default Component;
