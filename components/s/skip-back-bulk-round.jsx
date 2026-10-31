import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ach8j2bjb.css';
import '../../css/l/ly4mftb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ach8j2bjb"/><path class="ly4mftb3k"/></g>`,
		"fallback": "coolicons:skip-back-bulk-round",
	});
}

export default Component;
