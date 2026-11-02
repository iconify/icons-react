import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-qpp8bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-qpp8bff"/>`,
		"fallback": "mingcute:thumb-up-line",
	});
}

export default Component;
