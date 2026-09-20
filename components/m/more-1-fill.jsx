import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_6hk7b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_6hk7b1e"/>`,
		"fallback": "mingcute:more-1-fill",
	});
}

export default Component;
