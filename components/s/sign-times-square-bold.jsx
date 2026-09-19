import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5zv7db-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5zv7db-w"/>`,
		"fallback": "iconamoon:sign-times-square-bold",
	});
}

export default Component;
