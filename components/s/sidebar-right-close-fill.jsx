import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2dixy0jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2dixy0jy"/>`,
		"fallback": "mingcute:sidebar-right-close-fill",
	});
}

export default Component;
