import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1-z5nbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1-z5nbdx"/>`,
		"fallback": "mingcute:wallet-2-fill",
	});
}

export default Component;
