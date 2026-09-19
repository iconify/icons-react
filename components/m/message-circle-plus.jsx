import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufqvjm-rq.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufqvjm-rq"/><path class="fu72iwgtz"/>`,
		"fallback": "boxicons:message-circle-plus",
	});
}

export default Component;
