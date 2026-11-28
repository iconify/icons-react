import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxhqmc33b.css';
import '../../css/t/tbizs6b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wxhqmc33b"/><path class="primary tbizs6b5j"/></g>`,
		"fallback": "iconaut:message-dashed-duotone",
	});
}

export default Component;
