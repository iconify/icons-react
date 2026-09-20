import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do8im349k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do8im349k"/>`,
		"fallback": "mi:notification-off",
	});
}

export default Component;
