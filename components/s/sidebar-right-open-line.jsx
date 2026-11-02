import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfnb6qb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfnb6qb_h"/>`,
		"fallback": "mingcute:sidebar-right-open-line",
	});
}

export default Component;
