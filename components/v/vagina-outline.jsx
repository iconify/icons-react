import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w7qb7bc0x.css';
import '../../css/a/a69o84b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w7qb7bc0x"/><path clip-rule="evenodd" class="a69o84b7f"/></g>`,
		"fallback": "healthicons:vagina-outline",
	});
}

export default Component;
