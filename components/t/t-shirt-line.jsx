import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtqa41btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtqa41btu"/>`,
		"fallback": "mingcute:t-shirt-line",
	});
}

export default Component;
