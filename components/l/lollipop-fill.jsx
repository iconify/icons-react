import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu17u970l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu17u970l"/>`,
		"fallback": "mingcute:lollipop-fill",
	});
}

export default Component;
