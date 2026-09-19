import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alm8q0_fd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="alm8q0_fd"/>`,
		"fallback": "heroicons-solid:receipt-tax",
	});
}

export default Component;
