import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-e4_4mbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-e4_4mbz"/>`,
		"fallback": "mingcute:message-1-line",
	});
}

export default Component;
