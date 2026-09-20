import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh16x0bfw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh16x0bfw"/>`,
		"fallback": "lsicon:timing-shelf-down-outline",
	});
}

export default Component;
