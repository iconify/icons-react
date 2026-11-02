import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_go7u7sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_go7u7sv"/>`,
		"fallback": "mingcute:refresh-3-fill",
	});
}

export default Component;
