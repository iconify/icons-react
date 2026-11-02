import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuat47bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuat47bmi"/>`,
		"fallback": "mingcute:mark-pen-fill",
	});
}

export default Component;
