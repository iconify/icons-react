import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsek8xbbm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsek8xbbm"/>`,
		"fallback": "teenyicons:user-minus-outline",
	});
}

export default Component;
