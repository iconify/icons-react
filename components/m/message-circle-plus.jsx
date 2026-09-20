import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikjp-dbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikjp-dbsh"/>`,
		"fallback": "tabler:message-circle-plus",
	});
}

export default Component;
