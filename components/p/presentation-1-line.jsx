import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqiq-ebfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqiq-ebfj"/>`,
		"fallback": "mingcute:presentation-1-line",
	});
}

export default Component;
