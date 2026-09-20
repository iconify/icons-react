import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5r444b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5r444b4e"/>`,
		"fallback": "lets-icons:temperature-fill",
	});
}

export default Component;
