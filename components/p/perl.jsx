import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohqfqp6at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohqfqp6at"/>`,
		"fallback": "simple-icons:perl",
	});
}

export default Component;
