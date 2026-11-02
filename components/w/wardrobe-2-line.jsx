import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzef7-jsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzef7-jsg"/>`,
		"fallback": "mingcute:wardrobe-2-line",
	});
}

export default Component;
