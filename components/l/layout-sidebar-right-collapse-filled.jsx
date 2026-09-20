import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5b74t5pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5b74t5pw"/>`,
		"fallback": "tabler:layout-sidebar-right-collapse-filled",
	});
}

export default Component;
