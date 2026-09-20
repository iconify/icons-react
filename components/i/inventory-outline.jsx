import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0htzcbrq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0htzcbrq"/>`,
		"fallback": "lsicon:inventory-outline",
	});
}

export default Component;
