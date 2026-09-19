import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y19h4g-0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y19h4g-0y"/>`,
		"fallback": "boxicons:medal-alt-2-filled",
	});
}

export default Component;
