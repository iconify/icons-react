import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2iyb1b_w.css';

const viewBox = {"width":641,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2iyb1b_w"/>`,
		"fallback": "whh:resizevertical",
	});
}

export default Component;
