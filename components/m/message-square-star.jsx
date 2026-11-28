import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcit-ab7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcit-ab7w"/>`,
		"fallback": "noviair:message-square-star",
	});
}

export default Component;
