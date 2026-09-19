import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lysg5zyhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lysg5zyhu"/>`,
		"fallback": "hugeicons:view-sidebar-left",
	});
}

export default Component;
