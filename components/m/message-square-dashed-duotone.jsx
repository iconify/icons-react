import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/go45bkbvu.css';
import '../../css/h/hb32lyb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="go45bkbvu secondary"/><path class="hb32lyb7g primary"/></g>`,
		"fallback": "iconaut:message-square-dashed-duotone",
	});
}

export default Component;
