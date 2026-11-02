import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgvzp1bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgvzp1bfn"/>`,
		"fallback": "mingcute:message-square-plus-fill",
	});
}

export default Component;
