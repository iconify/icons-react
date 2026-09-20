import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ml8t2kr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ml8t2kr"/>`,
		"fallback": "raphael:js",
	});
}

export default Component;
