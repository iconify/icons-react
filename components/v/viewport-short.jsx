import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax3mq91ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax3mq91ic"/>`,
		"fallback": "tabler:viewport-short",
	});
}

export default Component;
