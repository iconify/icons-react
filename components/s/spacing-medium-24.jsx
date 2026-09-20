import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8g9ogb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8g9ogb8o"/>`,
		"fallback": "octicon:spacing-medium-24",
	});
}

export default Component;
