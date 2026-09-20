import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdu0l2a4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdu0l2a4x"/>`,
		"fallback": "mdi:reorder-horizontal",
	});
}

export default Component;
