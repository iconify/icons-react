import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz3iy2bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz3iy2bud"/>`,
		"fallback": "boxicons:lira-filled",
	});
}

export default Component;
