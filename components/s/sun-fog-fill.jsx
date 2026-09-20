import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi0i5it0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi0i5it0m"/>`,
		"fallback": "mingcute:sun-fog-fill",
	});
}

export default Component;
