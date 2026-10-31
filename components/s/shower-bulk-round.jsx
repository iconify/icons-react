import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1fnfzazw.css';
import '../../css/f/f6rg45f9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1fnfzazw"/><path class="f6rg45f9r"/></g>`,
		"fallback": "coolicons:shower-bulk-round",
	});
}

export default Component;
