import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp-zs-12u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp-zs-12u"/>`,
		"fallback": "pullo:stack-simple-check-fill",
	});
}

export default Component;
