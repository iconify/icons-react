import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybx8r3b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybx8r3b1j"/>`,
		"fallback": "hugeicons:logs",
	});
}

export default Component;
