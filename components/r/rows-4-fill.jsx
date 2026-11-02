import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijb73rbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijb73rbzj"/>`,
		"fallback": "mingcute:rows-4-fill",
	});
}

export default Component;
