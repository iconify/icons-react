import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuahm6pfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuahm6pfn"/>`,
		"fallback": "boxicons:ticket-filled",
	});
}

export default Component;
