import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh49b7bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh49b7bgp"/>`,
		"fallback": "mingcute:textbox-fill",
	});
}

export default Component;
