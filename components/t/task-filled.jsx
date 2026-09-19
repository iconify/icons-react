import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgvy4titi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgvy4titi"/>`,
		"fallback": "boxicons:task-filled",
	});
}

export default Component;
