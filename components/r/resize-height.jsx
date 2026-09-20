import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytak8inyi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytak8inyi"/>`,
		"fallback": "oi:resize-height",
	});
}

export default Component;
