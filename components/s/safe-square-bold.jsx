import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ta9mk599h.css';
import '../../css/p/p51vbzbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ta9mk599h"/><path clip-rule="evenodd" class="p51vbzbrt"/></g>`,
		"fallback": "solar:safe-square-bold",
	});
}

export default Component;
