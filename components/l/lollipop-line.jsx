import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu2ws9tix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu2ws9tix"/>`,
		"fallback": "mingcute:lollipop-line",
	});
}

export default Component;
