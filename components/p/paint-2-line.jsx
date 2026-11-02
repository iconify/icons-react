import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3zer8wif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3zer8wif"/>`,
		"fallback": "mingcute:paint-2-line",
	});
}

export default Component;
