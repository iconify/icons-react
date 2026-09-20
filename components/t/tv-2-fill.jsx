import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap9j0fbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ap9j0fbuo"/>`,
		"fallback": "mingcute:tv-2-fill",
	});
}

export default Component;
