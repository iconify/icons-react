import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae6vf0y8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae6vf0y8q"/>`,
		"fallback": "mingcute:qrcode-2-line",
	});
}

export default Component;
