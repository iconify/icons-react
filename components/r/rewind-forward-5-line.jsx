import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0q_-7bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0q_-7bba"/>`,
		"fallback": "mingcute:rewind-forward-5-line",
	});
}

export default Component;
