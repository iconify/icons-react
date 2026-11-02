import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltj7jfb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltj7jfb6c"/>`,
		"fallback": "mingcute:star-half-fill",
	});
}

export default Component;
