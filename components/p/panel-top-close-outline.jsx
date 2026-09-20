import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgymo9b3j.css';
import '../../css/a/avufq6bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rgymo9b3j"/><path clip-rule="evenodd" class="avufq6bzo"/></g>`,
		"fallback": "solar:panel-top-close-outline",
	});
}

export default Component;
