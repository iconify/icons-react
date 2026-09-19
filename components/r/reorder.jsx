import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/adddlibrd.css';
import '../../css/g/gb5770bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="adddlibrd"/><path clip-rule="evenodd" class="gb5770bkp"/></g>`,
		"fallback": "gg:reorder",
	});
}

export default Component;
