import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkl9mhbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkl9mhbcs"/>`,
		"fallback": "mingcute:pen-ai-fill",
	});
}

export default Component;
