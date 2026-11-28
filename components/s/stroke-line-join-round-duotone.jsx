import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9wya7brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary v9wya7brf"/>`,
		"fallback": "iconaut:stroke-line-join-round-duotone",
	});
}

export default Component;
