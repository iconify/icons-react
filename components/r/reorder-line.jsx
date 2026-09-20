import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acdl97b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acdl97b8e"/>`,
		"fallback": "si:reorder-line",
	});
}

export default Component;
