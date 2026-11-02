import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6bef0f7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6bef0f7a"/>`,
		"fallback": "mingcute:volume-fill",
	});
}

export default Component;
