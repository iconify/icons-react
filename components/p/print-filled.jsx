import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqf32-4_e.css';
import '../../css/o/o6_5gibaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aqf32-4_e"/><path class="o6_5gibaj"/></g>`,
		"fallback": "reicon:print-filled",
	});
}

export default Component;
