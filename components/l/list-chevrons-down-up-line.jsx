import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0dvfudql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0dvfudql"/>`,
		"fallback": "mingcute:list-chevrons-down-up-line",
	});
}

export default Component;
