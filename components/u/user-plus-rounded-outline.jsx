import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc8l53b6q.css';
import '../../css/y/y0wtcrqbx.css';
import '../../css/x/x0r9zqw6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mc8l53b6q"/><path class="y0wtcrqbx"/><path clip-rule="evenodd" class="x0r9zqw6z"/></g>`,
		"fallback": "solar:user-plus-rounded-outline",
	});
}

export default Component;
