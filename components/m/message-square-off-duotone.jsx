import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ts1cluy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ts1cluy primary"/>`,
		"fallback": "iconaut:message-square-off-duotone",
	});
}

export default Component;
