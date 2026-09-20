import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwxf50biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwxf50biq"/>`,
		"fallback": "mingcute:minus-circle-fill",
	});
}

export default Component;
