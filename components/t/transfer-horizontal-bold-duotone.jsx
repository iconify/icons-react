import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qyh8t8bni.css';
import '../../css/d/dfkvfmbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qyh8t8bni"/><path class="dfkvfmbzp"/></g>`,
		"fallback": "solar:transfer-horizontal-bold-duotone",
	});
}

export default Component;
