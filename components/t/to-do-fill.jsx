import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-jy4_bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-jy4_bfh"/>`,
		"fallback": "mingcute:to-do-fill",
	});
}

export default Component;
