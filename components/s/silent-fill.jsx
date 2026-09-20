import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol8o5mb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol8o5mb1h"/>`,
		"fallback": "mingcute:silent-fill",
	});
}

export default Component;
