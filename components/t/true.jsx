import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb-2542dh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb-2542dh"/>`,
		"fallback": "picon:true",
	});
}

export default Component;
