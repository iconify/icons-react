import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xmgry2bce.css';
import '../../css/q/qa90zcb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xmgry2bce"/><path class="qa90zcb7k"/></g>`,
		"fallback": "mynaui:letter-d-circle-solid",
	});
}

export default Component;
