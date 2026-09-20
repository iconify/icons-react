import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj403_b8e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj403_b8e"/>`,
		"fallback": "picon:piggy",
	});
}

export default Component;
