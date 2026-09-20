import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu8c7vezn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu8c7vezn"/>`,
		"fallback": "ix:user-management",
	});
}

export default Component;
