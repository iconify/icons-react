import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n96wxfbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n96wxfbqf"/>`,
		"fallback": "bx:pause",
	});
}

export default Component;
