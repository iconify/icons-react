import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e58mt0o4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e58mt0o4o"/>`,
		"fallback": "si:ticket-alt-1-fill",
	});
}

export default Component;
