import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifnwjqboz.css';
import '../../css/v/v9d4qjbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifnwjqboz"/><path class="v9d4qjbky"/></g>`,
		"fallback": "solar:pip-2-bold-duotone",
	});
}

export default Component;
