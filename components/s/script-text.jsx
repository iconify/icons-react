import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5j43topi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5j43topi"/>`,
		"fallback": "pixelarticons:script-text",
	});
}

export default Component;
