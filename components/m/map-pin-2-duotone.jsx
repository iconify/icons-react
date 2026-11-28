import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/add57-bjz.css';
import '../../css/g/g3njerbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="add57-bjz secondary"/><path class="g3njerbul primary"/></g>`,
		"fallback": "iconaut:map-pin-2-duotone",
	});
}

export default Component;
