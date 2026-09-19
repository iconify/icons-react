import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esn6yfbrh.css';
import '../../css/c/czgf8h5nm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esn6yfbrh"/><path class="czgf8h5nm"/></g>`,
		"fallback": "bi:stoplights",
	});
}

export default Component;
