import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8tzs_jpg.css';
import '../../css/b/btpxxkpmo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o8tzs_jpg"/><path class="btpxxkpmo"/></g>`,
		"fallback": "pepicons-pencil:loop-minus",
	});
}

export default Component;
