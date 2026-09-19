import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1pnk2b_c.css';
import '../../css/s/sz77qabhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1pnk2b_c"/><path clip-rule="evenodd" class="sz77qabhw"/></g>`,
		"fallback": "healthicons:sanitizer-outline",
	});
}

export default Component;
