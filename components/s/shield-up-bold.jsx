import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhd6nmq1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhd6nmq1e"/>`,
		"fallback": "solar:shield-up-bold",
	});
}

export default Component;
