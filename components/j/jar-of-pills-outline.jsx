import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmhdggo_x.css';
import '../../css/x/xqwj5hbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kmhdggo_x"/><path clip-rule="evenodd" class="xqwj5hbpr"/></g>`,
		"fallback": "solar:jar-of-pills-outline",
	});
}

export default Component;
