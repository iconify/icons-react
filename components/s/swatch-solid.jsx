import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_m68m8it.css';
import '../../css/p/pg8xj3b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z_m68m8it"/><path class="pg8xj3b6o"/></g>`,
		"fallback": "heroicons:swatch-solid",
	});
}

export default Component;
