import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ogz5tuj3q.css';
import '../../css/z/z4wzv78is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ogz5tuj3q"/><path class="z4wzv78is"/></g>`,
		"fallback": "solar:magic-wand-outline",
	});
}

export default Component;
