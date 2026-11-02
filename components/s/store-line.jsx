import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo__o3b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo__o3b8e"/>`,
		"fallback": "mingcute:store-line",
	});
}

export default Component;
