import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3vjmwkjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3vjmwkjt"/>`,
		"fallback": "solar:square-double-alt-arrow-right-outline",
	});
}

export default Component;
