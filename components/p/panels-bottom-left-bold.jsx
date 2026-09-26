import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2lm5bc3q.css';
import '../../css/u/udc6961nl.css';
import '../../css/y/ye1fytb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d2lm5bc3q"/><path class="udc6961nl"/><path clip-rule="evenodd" class="ye1fytb6e"/></g>`,
		"fallback": "solar:panels-bottom-left-bold",
	});
}

export default Component;
