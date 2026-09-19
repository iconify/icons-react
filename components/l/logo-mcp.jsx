import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8ze_uwyl.css';
import '../../css/w/wpuu0kbuo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c8ze_uwyl"/><path class="wpuu0kbuo"/></g>`,
		"fallback": "gravity-ui:logo-mcp",
	});
}

export default Component;
