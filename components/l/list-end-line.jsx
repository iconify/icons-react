import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri6kwog9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri6kwog9q"/>`,
		"fallback": "mingcute:list-end-line",
	});
}

export default Component;
