import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e691ilzdd.css';
import '../../css/t/t5hfqlb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e691ilzdd"/><path class="t5hfqlb2q"/></g>`,
		"fallback": "reicon:search-bug3-filled",
	});
}

export default Component;
