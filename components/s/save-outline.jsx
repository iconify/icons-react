import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg-gktmdr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg-gktmdr"/>`,
		"fallback": "lsicon:save-outline",
	});
}

export default Component;
