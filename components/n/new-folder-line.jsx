import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgh_0ybfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgh_0ybfz"/>`,
		"fallback": "mingcute:new-folder-line",
	});
}

export default Component;
