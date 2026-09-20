import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyl6qzb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyl6qzb_o"/>`,
		"fallback": "mingcute:layout-10-fill",
	});
}

export default Component;
