import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ookfb0m.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4ookfb0m"/>`,
		"fallback": "jam:torch",
	});
}

export default Component;
