import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlf0m3-1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlf0m3-1r"/>`,
		"fallback": "mingcute:park-fill",
	});
}

export default Component;
