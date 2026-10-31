import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_aruko7w.css';
import '../../css/z/zghu3ubgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_aruko7w"/><path class="zghu3ubgy"/></g>`,
		"fallback": "coolicons:phone-outgoing-bulk-round",
	});
}

export default Component;
