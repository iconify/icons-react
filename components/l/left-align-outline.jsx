import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfkb83bxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfkb83bxl"/>`,
		"fallback": "lsicon:left-align-outline",
	});
}

export default Component;
