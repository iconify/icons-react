import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy7qs5byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy7qs5byw"/>`,
		"fallback": "mingcute:save-line",
	});
}

export default Component;
