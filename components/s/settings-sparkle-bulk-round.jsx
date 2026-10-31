import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9kanab_c.css';
import '../../css/k/kqkww4b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j9kanab_c"/><path class="kqkww4b8y"/></g>`,
		"fallback": "coolicons:settings-sparkle-bulk-round",
	});
}

export default Component;
