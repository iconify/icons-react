import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0xzv1mye.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0xzv1mye"/>`,
		"fallback": "lineicons:plug",
	});
}

export default Component;
