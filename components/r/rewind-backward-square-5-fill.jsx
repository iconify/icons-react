import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgj-9x8dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgj-9x8dp"/>`,
		"fallback": "mingcute:rewind-backward-square-5-fill",
	});
}

export default Component;
