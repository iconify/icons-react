import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/df_1v7hrx.css';
import '../../css/v/ve5uof6vp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="df_1v7hrx"/><path class="ve5uof6vp"/></g>`,
		"fallback": "pepicons-pencil:t-shirt-off",
	});
}

export default Component;
