import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1ltgyy2o.css';
import '../../css/q/q-4b5cb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l1ltgyy2o"/><path class="q-4b5cb0c"/></g>`,
		"fallback": "coolicons:pencil-sparkle-bulk-round",
	});
}

export default Component;
