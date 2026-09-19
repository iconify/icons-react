import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar8e79b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ar8e79b7h"/>`,
		"fallback": "griddy-icons:shopping-bag-plus",
	});
}

export default Component;
