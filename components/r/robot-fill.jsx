import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4q0anbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4q0anbqy"/>`,
		"fallback": "ri:robot-fill",
	});
}

export default Component;
