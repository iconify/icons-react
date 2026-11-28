import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rarc7rbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rarc7rbtc"/>`,
		"fallback": "iconaut:shopping-bag-check-solid",
	});
}

export default Component;
