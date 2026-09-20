import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz_j2xb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz_j2xb7b"/>`,
		"fallback": "mingcute:mail-line",
	});
}

export default Component;
