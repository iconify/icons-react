import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhgq3h-um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhgq3h-um"/>`,
		"fallback": "mingcute:mosaic-line",
	});
}

export default Component;
