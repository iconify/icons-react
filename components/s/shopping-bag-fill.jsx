import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4-7y7bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4-7y7bxo"/>`,
		"fallback": "eva:shopping-bag-fill",
	});
}

export default Component;
