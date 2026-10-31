import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4n4mgb5a.css';
import '../../css/l/lne1cyb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4n4mgb5a"/><path class="lne1cyb4m"/></g>`,
		"fallback": "coolicons:telegram-bulk-round",
	});
}

export default Component;
