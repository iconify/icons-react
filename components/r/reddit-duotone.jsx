import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ta9ymbboq.css';
import '../../css/y/y_y8yyb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ta9ymbboq"/><path class="primary y_y8yyb1g"/></g>`,
		"fallback": "iconaut:reddit-duotone",
	});
}

export default Component;
