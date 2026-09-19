import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iml9x8oaj.css';
import '../../css/s/symfdeb8a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iml9x8oaj"/><circle class="symfdeb8a"/></g>`,
		"fallback": "foundation:photo",
	});
}

export default Component;
