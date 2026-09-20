import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1g1q-bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1g1q-bed"/>`,
		"fallback": "mingcute:screenshot-fill",
	});
}

export default Component;
