import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkc6rkbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkc6rkbhe"/>`,
		"fallback": "mingcute:italic-fill",
	});
}

export default Component;
