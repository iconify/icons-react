import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n5u5o1ykq.css';
import '../../css/l/lonii6b0k.css';
import '../../css/a/a7hds4b4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n5u5o1ykq"/><path clip-rule="evenodd" class="lonii6b0k"/><path clip-rule="evenodd" class="a7hds4b4p"/></g>`,
		"fallback": "healthicons:travel-alt",
	});
}

export default Component;
