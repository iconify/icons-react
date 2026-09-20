import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmeo3-b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmeo3-b1t"/>`,
		"fallback": "mingcute:skip-forward-fill",
	});
}

export default Component;
