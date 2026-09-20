import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdjazqvrv.css';
import '../../css/z/zpxhpgb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xdjazqvrv"/><path clip-rule="evenodd" class="zpxhpgb7r"/></g>`,
		"fallback": "solar:multiple-forward-right-bold",
	});
}

export default Component;
