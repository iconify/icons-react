import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta9oaqh9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta9oaqh9b"/>`,
		"fallback": "mdi-light:monitor",
	});
}

export default Component;
