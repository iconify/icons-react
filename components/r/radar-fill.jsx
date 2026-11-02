import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3_ta5b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3_ta5b5e"/>`,
		"fallback": "mingcute:radar-fill",
	});
}

export default Component;
