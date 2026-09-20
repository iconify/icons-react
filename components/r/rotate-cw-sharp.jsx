import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8f3o8_hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8f3o8_hj"/>`,
		"fallback": "keyline-icons:rotate-cw-sharp",
	});
}

export default Component;
