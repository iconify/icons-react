import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwjbk1txm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwjbk1txm"/>`,
		"fallback": "mingcute:mark-pen-fill",
	});
}

export default Component;
