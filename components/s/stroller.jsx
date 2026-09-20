import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on6e2sbfd.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on6e2sbfd"/>`,
		"fallback": "picon:stroller",
	});
}

export default Component;
