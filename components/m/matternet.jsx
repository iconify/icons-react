import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sik-0kbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sik-0kbyw"/>`,
		"fallback": "simple-icons:matternet",
	});
}

export default Component;
