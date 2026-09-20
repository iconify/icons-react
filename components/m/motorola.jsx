import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8df-059i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8df-059i"/>`,
		"fallback": "simple-icons:motorola",
	});
}

export default Component;
