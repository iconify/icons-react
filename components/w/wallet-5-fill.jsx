import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-l1nhb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-l1nhb_n"/>`,
		"fallback": "mingcute:wallet-5-fill",
	});
}

export default Component;
