import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6fj4zboo.css';
import '../../css/b/blo8ez0bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d6fj4zboo"/><path class="blo8ez0bg"/></g>`,
		"fallback": "solar:undo-left-round-bold-duotone",
	});
}

export default Component;
