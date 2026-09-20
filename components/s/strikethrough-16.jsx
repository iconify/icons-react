import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4ed0ri_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4ed0ri_q"/>`,
		"fallback": "octicon:strikethrough-16",
	});
}

export default Component;
