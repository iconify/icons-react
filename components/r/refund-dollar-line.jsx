import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b00hsobhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b00hsobhn"/>`,
		"fallback": "mingcute:refund-dollar-line",
	});
}

export default Component;
