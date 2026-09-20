import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq9-xobpt.css';

const viewBox = {"width":62.846,"height":60.485,"left":98.638,"top":11.193};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq9-xobpt"/>`,
		"fallback": "thesvg-color:knowbe4",
	});
}

export default Component;
