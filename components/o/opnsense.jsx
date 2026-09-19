import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3yjw5q7e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3yjw5q7e"/>`,
		"fallback": "devicon:opnsense",
	});
}

export default Component;
