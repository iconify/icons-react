import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_0eabwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni_0eabwt"/>`,
		"fallback": "la:user-tie",
	});
}

export default Component;
