import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8sh87byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8sh87byl"/>`,
		"fallback": "mingcute:rewind-forward-square-30-line",
	});
}

export default Component;
