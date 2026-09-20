import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsd-ij4-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsd-ij4-w"/>`,
		"fallback": "mdi:lightbulb-edison-outline",
	});
}

export default Component;
