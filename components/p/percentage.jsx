import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unf88w3zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unf88w3zv"/>`,
		"fallback": "mynaui:percentage",
	});
}

export default Component;
