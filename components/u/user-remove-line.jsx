import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxnxe3krn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxnxe3krn"/>`,
		"fallback": "mingcute:user-remove-line",
	});
}

export default Component;
