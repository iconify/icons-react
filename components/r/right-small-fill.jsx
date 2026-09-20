import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-2wlkbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-2wlkbqr"/>`,
		"fallback": "mingcute:right-small-fill",
	});
}

export default Component;
