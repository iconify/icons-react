import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhy3_87vl.css';
import '../../css/w/w9amoub4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bhy3_87vl"/><path class="w9amoub4m"/></g>`,
		"fallback": "reicon:undo-duotone",
	});
}

export default Component;
