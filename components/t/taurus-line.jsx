import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf6z445bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf6z445bo"/>`,
		"fallback": "mingcute:taurus-line",
	});
}

export default Component;
