import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up8o3o55e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up8o3o55e"/>`,
		"fallback": "healthicons:vomiting-24px",
	});
}

export default Component;
