import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnvhg3b_q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnvhg3b_q"/>`,
		"fallback": "fa7-solid:square",
	});
}

export default Component;
