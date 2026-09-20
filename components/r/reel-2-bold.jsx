import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g6v8iccio.css';
import '../../css/f/fwikxfz7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g6v8iccio"/><path clip-rule="evenodd" class="fwikxfz7c"/></g>`,
		"fallback": "solar:reel-2-bold",
	});
}

export default Component;
