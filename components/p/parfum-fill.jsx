import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o734a39ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o734a39ah"/>`,
		"fallback": "mingcute:parfum-fill",
	});
}

export default Component;
