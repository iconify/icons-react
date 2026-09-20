import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgzc4sb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgzc4sb9c"/>`,
		"fallback": "thesvg-color:stmicroelectronics",
	});
}

export default Component;
