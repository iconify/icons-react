import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4b7xfb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4b7xfb9n"/>`,
		"fallback": "mingcute:safety-certificate-line",
	});
}

export default Component;
