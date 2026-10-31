import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_aruko7w.css';
import '../../css/z/zvk288b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_aruko7w"/><path class="zvk288b7k"/></g>`,
		"fallback": "coolicons:phone-incoming-bulk-round",
	});
}

export default Component;
