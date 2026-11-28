import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c96abobtm.css';
import '../../css/v/vkkapga2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c96abobtm secondary"/><path class="primary vkkapga2u"/></g>`,
		"fallback": "iconaut:screwdriver-duotone",
	});
}

export default Component;
