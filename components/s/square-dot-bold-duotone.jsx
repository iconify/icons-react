import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wv_uagb0m.css';
import '../../css/y/y6-b8lbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wv_uagb0m"/><path class="y6-b8lbmz"/></g>`,
		"fallback": "solar:square-dot-bold-duotone",
	});
}

export default Component;
