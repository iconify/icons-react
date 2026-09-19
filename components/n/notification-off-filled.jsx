import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfmad0bjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfmad0bjf"/>`,
		"fallback": "carbon:notification-off-filled",
	});
}

export default Component;
