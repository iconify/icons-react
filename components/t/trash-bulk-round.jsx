import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2kniu8dt.css';
import '../../css/e/e7pcij7ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2kniu8dt"/><path class="e7pcij7ek"/></g>`,
		"fallback": "coolicons:trash-bulk-round",
	});
}

export default Component;
