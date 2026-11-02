import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r67e7r2zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r67e7r2zu"/>`,
		"fallback": "mingcute:pen-2-ai-fill",
	});
}

export default Component;
