import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw64jtbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw64jtbsf"/>`,
		"fallback": "boxicons:laptop-alt",
	});
}

export default Component;
