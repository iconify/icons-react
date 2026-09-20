import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdn6n-b6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdn6n-b6y"/>`,
		"fallback": "la:long-arrow-alt-right",
	});
}

export default Component;
