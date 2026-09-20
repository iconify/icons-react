import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8voybige.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8voybige"/>`,
		"fallback": "mingcute:service-line",
	});
}

export default Component;
