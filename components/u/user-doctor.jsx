import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0u7a7bcm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0u7a7bcm"/>`,
		"fallback": "fa7-solid:user-doctor",
	});
}

export default Component;
