import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq-olzb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq-olzb8h"/>`,
		"fallback": "mingcute:sound-line-fill",
	});
}

export default Component;
