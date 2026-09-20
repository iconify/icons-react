import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6ibhaboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6ibhaboe"/>`,
		"fallback": "mingcute:steering-wheel-line",
	});
}

export default Component;
