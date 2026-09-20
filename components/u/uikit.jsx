import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x00vtyb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x00vtyb9c"/>`,
		"fallback": "thesvg:uikit",
	});
}

export default Component;
