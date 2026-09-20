import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9rtbeb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9rtbeb4e"/>`,
		"fallback": "mingcute:toggle-right-2-fill",
	});
}

export default Component;
