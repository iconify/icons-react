import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f72h2ac5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f72h2ac5z"/>`,
		"fallback": "mingcute:list-collapse-fill",
	});
}

export default Component;
