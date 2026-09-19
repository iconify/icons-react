import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p56h_bbeb.css';
import '../../css/p/p0qajccag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p56h_bbeb"/><path class="p0qajccag"/>`,
		"fallback": "boxicons:message-edit",
	});
}

export default Component;
