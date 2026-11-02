import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhy3x40hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhy3x40hb"/>`,
		"fallback": "mingcute:pavilion-line",
	});
}

export default Component;
