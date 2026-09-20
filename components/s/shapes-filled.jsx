import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixc7s1b4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixc7s1b4e"/>`,
		"fallback": "ix:shapes-filled",
	});
}

export default Component;
