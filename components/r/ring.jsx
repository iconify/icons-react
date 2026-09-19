import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dbd7yjbpd.css';
import '../../css/z/zb3hvbrce.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dbd7yjbpd"/><path class="zb3hvbrce"/></g>`,
		"fallback": "at-icons:ring",
	});
}

export default Component;
