import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlhd07b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlhd07b4m"/>`,
		"fallback": "mingcute:moon-fill",
	});
}

export default Component;
