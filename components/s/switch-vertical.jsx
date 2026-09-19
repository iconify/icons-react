import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7wt4vh5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7wt4vh5t"/>`,
		"fallback": "heroicons-outline:switch-vertical",
	});
}

export default Component;
