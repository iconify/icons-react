import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/furb690ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="furb690ms"/>`,
		"fallback": "ri:sun-foggy-fill",
	});
}

export default Component;
