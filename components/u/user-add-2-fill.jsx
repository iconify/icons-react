import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxnts5b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxnts5b1m"/>`,
		"fallback": "mingcute:user-add-2-fill",
	});
}

export default Component;
