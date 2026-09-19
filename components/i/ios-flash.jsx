import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz8zq1ysl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz8zq1ysl"/>`,
		"fallback": "ion:ios-flash",
	});
}

export default Component;
