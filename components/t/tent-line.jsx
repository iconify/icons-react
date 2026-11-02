import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voc_w8mff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voc_w8mff"/>`,
		"fallback": "mingcute:tent-line",
	});
}

export default Component;
