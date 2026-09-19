import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2d7dbc9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2d7dbc9t"/>`,
		"fallback": "heroicons:pause-circle",
	});
}

export default Component;
