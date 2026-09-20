import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uny9v1q5e.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uny9v1q5e"/>`,
		"fallback": "lineicons:reload",
	});
}

export default Component;
