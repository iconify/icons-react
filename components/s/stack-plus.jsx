import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0y_lybol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0y_lybol"/>`,
		"fallback": "tabler:stack-plus",
	});
}

export default Component;
