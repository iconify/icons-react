import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1mfdccfd.css';
import '../../css/k/kknolkb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j1mfdccfd secondary"/><path class="kknolkb7e primary"/></g>`,
		"fallback": "iconaut:shovel-duotone",
	});
}

export default Component;
