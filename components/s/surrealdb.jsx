import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f07p2fb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f07p2fb9d"/>`,
		"fallback": "simple-icons:surrealdb",
	});
}

export default Component;
