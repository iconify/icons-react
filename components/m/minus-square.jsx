import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0v1oeb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0v1oeb7t"/>`,
		"fallback": "ci:minus-square",
	});
}

export default Component;
