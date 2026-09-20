import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xxm6k5vux.css';
import '../../css/z/z7i8kpb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xxm6k5vux"/><path class="z7i8kpb1y"/></g>`,
		"fallback": "solar:quit-pip-bold",
	});
}

export default Component;
