import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9x59-bbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9x59-bbj"/>`,
		"fallback": "lsicon:shelf-down-outline",
	});
}

export default Component;
