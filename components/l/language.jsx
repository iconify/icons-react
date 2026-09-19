import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhx9qgb1y.css';
import '../../css/q/q_azv0b7e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dhx9qgb1y"/><path clip-rule="evenodd" class="q_azv0b7e"/></g>`,
		"fallback": "heroicons-solid:language",
	});
}

export default Component;
