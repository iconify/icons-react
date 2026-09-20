import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_z55o9hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_z55o9hy"/>`,
		"fallback": "mingcute:text-direction-left-line",
	});
}

export default Component;
