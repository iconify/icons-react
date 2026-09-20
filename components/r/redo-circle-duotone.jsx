import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_9ej1b6s.css';
import '../../css/f/f440epbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z_9ej1b6s"/><path class="f440epbis"/></g>`,
		"fallback": "reicon:redo-circle-duotone",
	});
}

export default Component;
