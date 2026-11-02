import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnwoh5z1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnwoh5z1w"/>`,
		"fallback": "mingcute:rotate-to-vertical-fill",
	});
}

export default Component;
