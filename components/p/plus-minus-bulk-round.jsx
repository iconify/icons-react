import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a06aaqtap.css';
import '../../css/j/juiz4l5bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a06aaqtap"/><path class="juiz4l5bu"/></g>`,
		"fallback": "coolicons:plus-minus-bulk-round",
	});
}

export default Component;
