import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-zvj7b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-zvj7b5l"/>`,
		"fallback": "mingcute:tree-4-fill",
	});
}

export default Component;
