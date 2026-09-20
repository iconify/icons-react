import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oums-nbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oums-nbgd"/>`,
		"fallback": "mingcute:mingcute-line",
	});
}

export default Component;
