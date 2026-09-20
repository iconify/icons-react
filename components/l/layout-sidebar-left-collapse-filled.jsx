import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prn9v0brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prn9v0brd"/>`,
		"fallback": "tabler:layout-sidebar-left-collapse-filled",
	});
}

export default Component;
