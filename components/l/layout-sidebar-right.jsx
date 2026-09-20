import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqvswxb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqvswxb8q"/>`,
		"fallback": "tabler:layout-sidebar-right",
	});
}

export default Component;
