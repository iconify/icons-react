import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akcnkhbyk.css';
import '../../css/b/bwng9wbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="akcnkhbyk"/><path clip-rule="evenodd" class="bwng9wbpa"/></g>`,
		"fallback": "solar:list-heart-bold",
	});
}

export default Component;
