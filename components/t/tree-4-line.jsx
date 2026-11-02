import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te7x2geix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te7x2geix"/>`,
		"fallback": "mingcute:tree-4-line",
	});
}

export default Component;
