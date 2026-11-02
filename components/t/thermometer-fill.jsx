import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxqy_1fvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxqy_1fvp"/>`,
		"fallback": "mingcute:thermometer-fill",
	});
}

export default Component;
