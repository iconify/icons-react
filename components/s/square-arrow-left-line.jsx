import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml4doxj6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml4doxj6e"/>`,
		"fallback": "mingcute:square-arrow-left-line",
	});
}

export default Component;
