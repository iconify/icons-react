import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcqr52b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcqr52b1e"/>`,
		"fallback": "mingcute:tiktok-fill",
	});
}

export default Component;
