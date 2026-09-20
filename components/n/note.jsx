import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ap4ghrbqo.css';
import '../../css/o/ow5aojbbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ap4ghrbqo"/><path class="ow5aojbbx"/></g>`,
		"fallback": "rivet-icons:note",
	});
}

export default Component;
