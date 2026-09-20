import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owpd0cb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owpd0cb1b"/>`,
		"fallback": "mingcute:tongue-fill",
	});
}

export default Component;
