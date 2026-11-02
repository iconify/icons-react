import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzq-0irrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzq-0irrq"/>`,
		"fallback": "mingcute:scissors-2-fill",
	});
}

export default Component;
