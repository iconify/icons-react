import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_6dq0bie.css';
import '../../css/d/da4ksyy_o.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_6dq0bie"/><path class="da4ksyy_o"/></g>`,
		"fallback": "pullo:monitor-slash-duotone",
	});
}

export default Component;
