import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhv4y6ces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhv4y6ces"/>`,
		"fallback": "boxicons:tabs-filled",
	});
}

export default Component;
