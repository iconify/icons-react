import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy6my2z1s.css';
import '../../css/z/zvpr52bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qy6my2z1s"/><path class="zvpr52bet"/></g>`,
		"fallback": "coolicons:thumbs-down-bulk-round",
	});
}

export default Component;
