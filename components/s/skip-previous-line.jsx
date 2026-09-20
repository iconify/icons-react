import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok0vj4b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok0vj4b8e"/>`,
		"fallback": "mingcute:skip-previous-line",
	});
}

export default Component;
