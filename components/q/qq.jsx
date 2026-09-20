import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cokt-3b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cokt-3b5c"/>`,
		"fallback": "thesvg-color:qq",
	});
}

export default Component;
