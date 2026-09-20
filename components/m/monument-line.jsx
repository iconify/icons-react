import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrz70jbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrz70jbie"/>`,
		"fallback": "mingcute:monument-line",
	});
}

export default Component;
