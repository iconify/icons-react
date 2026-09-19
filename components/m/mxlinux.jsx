import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqp1pnkkp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqp1pnkkp"/>`,
		"fallback": "cib:mxlinux",
	});
}

export default Component;
