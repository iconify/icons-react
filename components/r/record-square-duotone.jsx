import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekqoz8b6p.css';
import '../../css/h/h1t93n7mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekqoz8b6p"/><path clip-rule="evenodd" class="h1t93n7mn"/></g>`,
		"fallback": "reicon:record-square-duotone",
	});
}

export default Component;
