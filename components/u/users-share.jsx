import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9g__ikfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9g__ikfh"/>`,
		"fallback": "tabler:users-share",
	});
}

export default Component;
