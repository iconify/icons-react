import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze_6td4qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze_6td4qh"/>`,
		"fallback": "heroicons:queue-list",
	});
}

export default Component;
