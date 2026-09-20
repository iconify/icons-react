import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5n9j3vfq.css';
import '../../css/e/enyo2nx2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5n9j3vfq"/><path class="enyo2nx2u"/></g>`,
		"fallback": "reicon:square-arrow-left-duotone",
	});
}

export default Component;
