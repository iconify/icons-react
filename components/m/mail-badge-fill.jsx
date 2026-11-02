import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvqbbv7zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvqbbv7zd"/>`,
		"fallback": "mingcute:mail-badge-fill",
	});
}

export default Component;
