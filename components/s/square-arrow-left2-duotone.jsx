import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5n9j3vfq.css';
import '../../css/q/qgn83qqrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5n9j3vfq"/><path class="qgn83qqrb"/></g>`,
		"fallback": "reicon:square-arrow-left2-duotone",
	});
}

export default Component;
