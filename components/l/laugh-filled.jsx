import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxq9lab-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxq9lab-m"/>`,
		"fallback": "boxicons:laugh-filled",
	});
}

export default Component;
