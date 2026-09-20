import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdufc8b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdufc8b8r"/>`,
		"fallback": "lets-icons:message-alt-fill",
	});
}

export default Component;
