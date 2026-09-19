import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afkrn8b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afkrn8b6q"/>`,
		"fallback": "circum:menu-burger",
	});
}

export default Component;
