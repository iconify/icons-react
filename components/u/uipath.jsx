import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulul0ib1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulul0ib1k"/>`,
		"fallback": "thesvg-color:uipath",
	});
}

export default Component;
