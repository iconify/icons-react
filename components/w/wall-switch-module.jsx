import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avywr9bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avywr9bui"/>`,
		"fallback": "cbi:wall-switch-module",
	});
}

export default Component;
